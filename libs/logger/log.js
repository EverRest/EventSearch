var winston = require('winston');
var ENV = process.env.NODE_ENV;

function getLogger(module) {
	var path = module.filename.split('/').slice(-2).join('/');

	return new winston.Logger({
		transports: [
			new winston.transports.Console({
				colorize: true,
				level: ENV == 'development' ? 'debug' : 'error',
				label: path
			})
		]
	});
}


module.exports = getLogger;
/*
winston.log('info', 'Hello distributed log files!');
winston.info('Hello again distributed logs');

winston.level = 'debug';
winston.log('debug', 'Now my debug messages are written to console!');*/