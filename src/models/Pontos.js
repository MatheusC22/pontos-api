const mongoose = require('../database');

const PontoSchema = new mongoose.Schema({
    nome :{
        type : String,
        require : true,
    },
    descricao : {
        type : String,
        require : true
    },
    estado : {
        type : String,
        require : true
    },
    cidade : {
        type : String,
        require : true
    },
    responsavel : {
        type : String,
        require : true
    },
    email_resp : {
        type : String,
        require : true,
        lowercase : true
    },
    fone_resp : {
        type : String,
        require : true
    }
});

const Ponto  = mongoose.model('Ponto',PontoSchema);

module.exports = Ponto;