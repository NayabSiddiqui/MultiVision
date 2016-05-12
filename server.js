/**
 * Created by nayab on 9/5/16.
 */
var express = require('express'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();
var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);
require('./server/config/mongoose')(config);
require('./server/config/passport')();
require('./server/config/routes')(app);


app.listen(config.port, function () {
    console.log('Server listening on port ' + config.port + '...');
});