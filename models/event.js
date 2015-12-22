var mongoose = require('../libs/mongoose');
	
	Schema = mongoose.Schema;

var schema = new Schema({
	event_name: {
		type: String,
		unique: true,
		required: true
	},
	event_date: {
		type: Date,
		default: Date.now
	},
	event_description: {
		type: String,
		required: true
	},
	event_adress: {
		type: String,
		required: true
	},
	created: {
		type: Date,
		default: Date.now
	}
});

	exports.User = mongoose.model('User', schema);