var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var galaxiasSchema = new Schema({
    id:{ type: String },
    galaxia:{ type: String },
    tipo:{ type: String },
    planetas:{ type: Array },
    planetasEnanos:  { type: Array },
    imagen:{ type: String },
});


module.exports = mongoose.model('Galaxia', galaxiasSchema,'galaxias');