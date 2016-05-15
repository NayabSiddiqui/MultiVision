/**
 * Created by nayab on 15/5/16.
 */

var passwordUtility = require('../utilities/passwordUtility')(),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

var userController = function () {

    var createUser = function (request, response, next) {
        var userData = request.body;
        userData.salt = passwordUtility.createSalt();
        userData.hashedPassword = passwordUtility.hashPassword(userData.salt, userData.password);

        User.create(userData, function (error, user) {

            if(error) {
                if(error.toString().indexOf('E11000') > -1) {
                    error = new Error('Duplicate User Name.');
                }
                response.status(400);
                return response.send({reason: error.toString()});
            }

            request.logIn(user, function (error) {
                if(error) {
                    return next(error);
                }
                response.send(user);
            })
        })
    };

    var getAllUsers = function (request, response) {
        User.find({})
            .exec(function (error, users) {
                if (error) {
                    response.status(404);
                    response.send(error);
                }
                else {
                    response.send(users);
                }
            })
    };

    return {
        createUser: createUser,
        getAllUsers: getAllUsers
    };
};

module.exports = userController;