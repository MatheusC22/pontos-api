const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ponto-api:ponto-api-key@cluster0.a7mwr.mongodb.net/ponto-turisticos?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

module.exports = mongoose;