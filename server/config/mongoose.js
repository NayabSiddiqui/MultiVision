/**
 * Created by nayab on 11/5/16.
 */
var mongoose = require('mongoose'),
    passwordUtility = require('../utilities/passwordUtility')();

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
            var salt, hash;

            salt = passwordUtility.createSalt();
            hash = passwordUtility.hashPassword(salt, 'Joe');
            User.create({firstName: 'Joe', lastName: 'Eames', userName: 'Joe', salt: salt, hashedPassword: hash});

            salt = passwordUtility.createSalt();
            hash = passwordUtility.hashPassword(salt, 'John');
            User.create({firstName: 'John', lastName: 'Papa', userName: 'John', salt: salt, hashedPassword: hash});

            salt = passwordUtility.createSalt();
            hash = passwordUtility.hashPassword(salt, 'Dan');
            User.create({firstName: 'Dan', lastName: 'Wahlin', userName: 'Dan', salt: salt, hashedPassword: hash});
        }
    });
};

module.exports = mongooseConfig;