/**
 * Created by nayab on 13/5/16.
 */
var userRouter = require('express').Router(),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    authController = require('../controllers/authController')();

var routes = function () {

    userRouter.route('/')
        .all(authController.requiresAuthenticatedRequest,
            authController.requiresRole('admin'))
        .get(function (request, response) {
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
        });

    return userRouter;
};

module.exports = routes;