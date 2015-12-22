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
		{username: 'gmg', sex: 'male', password: 'super'},
		{username: 'honey', sex: 'female', password: 'duper'},
		{username: 'admin', sex: 'female', password: 'alice'}
		];
	async.each(users, function(userData, callback){
		var user = new mongoose.models.User(userData);
		user.save(callback);
	}, callback
	);
};

/*
function requireEvents(callback) {
	require('./models/event');

	async.each(Object.keys(mongoose.models), function(modelName, callback) {
		mongoose.models[modelName].ensureIndexes(callback);
	}, callback);	
};



async.series([
	open,
	dropDatabase,
	requireEvents,
	createEvent
	], function(err) {
		console.log(arguments);
		mongoose.disconnect();
});

function createEvent(callback) {
	var events = [
		//{username: 'gmg', sex: 'male', password: 'super'},
		//{username: 'honey', sex: 'female', password: 'duper'},
		//{username: 'admin', sex: 'female', password: 'alice'}
		];
	async.each(events, function(eventData, callback){
		var event = new mongoose.models.Event(eventData);
		event.save(callback);
	}, callback
	);
};*/
