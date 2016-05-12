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

    // Seed User data
    var User = require('../models/userModel');

    User.find({}).exec(function (error, collection) {
        if(collection.length === 0){
            User.create({firstName: 'Joe', lastName: 'Eames', userName: 'Joe'});
            User.create({firstName: 'John', lastName: 'Papa', userName: 'John'});
            User.create({firstName: 'Dan', lastName: 'Wahlin', userName: 'Dan'});
        }
    })
};

module.exports = mongooseConfig;