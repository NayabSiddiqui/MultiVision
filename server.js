/**
 * Created by nayab on 9/5/16.
 */
var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var Message = require('./server/models/messageModel');

var globalRouter = require('./server/routes/globalRoutes')(Message);

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path) {
    return stylus(str).set('filename', path);
}

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(stylus.middleware({
    src: __dirname + '/public',
    compile: compile
}));
app.use(express.static(__dirname + '/public'));

if(env === 'development') {
    mongoose.connect('mongodb://localhost:27017/multivision');
}
else {
    mongoose.connect('mongodb://sa:service@ds019882.mlab.com:19882/multivision');
}
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function () {
    console.log('multivision db opened...');
});

var mongoMessage;

Message.findOne().exec(function (error, messageDoc) {
    mongoMessage = messageDoc.message;
});

app.get('/partials/:partialPath', function (request, response) {
    console.log(request.params.partialPath);
    response.render('partials/' + request.params.partialPath);
});

app.use('*', globalRouter);

/*app.get('*', function (request, response) {
    response.render('index', {
        mongoMessage: mongoMessage
    });
});*/

var port = process.env.PORT || 3030;
app.listen(port, function () {
    console.log('Server listening on port ' + port + '...');
});