var nconf = require('nconf');
var path = require('path');

nconf.env().argv()
.file({ file: path.join( __dirname, 'config.json') });

module.exports = nconf;