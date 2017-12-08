var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var bebidaSchema = new Schema({
	'nombre' : String,
	'marca' : String,
	'tipo' : String,
	'precio' : String
});

module.exports = mongoose.model('bebida', bebidaSchema);
