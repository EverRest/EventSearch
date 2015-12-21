var mongoose = require('./libs/mongoose');
var async = require('async');


async.series([
	open,
	dropDatabase,
	requireModels,
	createUser
	], function(err) {
		console.log(arguments);
		mongoose.disconnect();
});

function open(callback) {
	mongoose.connection.on('open', callback);
};

function dropDatabase(callback) {
	var db = mongoose.connection.db;
	db.dropDatabase(callback);
};

function requireModels(callback) {
	require('./models/user');

	async.each(Object.keys(mongoose.models), function(modelName, callback) {
		mongoose.models[modelName].ensureIndexes(callback);
	}, callback);
};

function createUser(callback) {
	var users = [
		{username: 'gmg', password: 'super'},
		{username: 'honey', password: 'duper'},
		{username: 'admin', password: 'alice'}
		];
	async.each(users, function(userData, callback){
		var user = new mongoose.models.User(userData);
		user.save(callback);
	}, callback
	);
};

