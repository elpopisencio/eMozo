var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var principalSchema = new Schema({
	'nombre' : String,
	'tipo' : String,
	'ingredientes' : String,
	'precio' : String
});

module.exports = mongoose.model('principal', principalSchema);
