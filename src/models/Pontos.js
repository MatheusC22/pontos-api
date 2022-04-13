const mongoose = require('../database');

const PontoSchema = new mongoose.Schema({
    nome :{
        type : String,
        required : true,
    },
    descricao : {
        type : String,
        required : true
    },
    estado : {
        type : String,
        required : true
    },
    cidade : {
        type : String,
        required : true
    },
    responsavel : {
        type : String,
        require : true
    },
    email_resp : {
        type : String,
        required : true,
        lowercase : true
    },
    fone_resp : {
        type : String,
        required : true
    }
});

const Ponto  = mongoose.model('Ponto',PontoSchema);

module.exports = Ponto;