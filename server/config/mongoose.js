/**
 * Created by nayab on 11/5/16.
 */
var mongoose = require('mongoose');

var mongooseConfig = function (config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function () {
        console.log('multivision db opened...');
    });
};

module.exports = mongooseConfig;