var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var entradaSchema = new Schema({
	'nombre' : String,
	'ingredientes' : String,
	'tipo' : String,
	'precio' : String
});

module.exports = mongoose.model('entrada', entradaSchema);
