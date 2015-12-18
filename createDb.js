var mongoose = require('./libs/mongoose');
var User = require('./models/user').User;

//var user = new User({
//	username: "Tester2",
//	password: "secret"
//});

//user.save(function(err, user, affected) {
//	if (err) throw err;

//	User.findOne({username: "Tester"}, function(err, tester) {
//		console.log(tester);
//	})
//});

mongoose.connection.on('open', function() {
	var db = mongoose.connection.db;
	db.dropDatabase(function(err) {
		if (err) throw err;
		console.log('OK');
		mongoose.disconnect();
	});
});
