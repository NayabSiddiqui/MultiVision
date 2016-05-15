/**
 * Created by nayab on 13/5/16.
 */
var userRouter = require('express').Router(),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    authController = require('../controllers/authController')(),
    userController = require('../controllers/userController')();

var routes = function () {

    userRouter.route('/')
        .get(authController.requiresAuthenticatedRequest,
            authController.requiresRole('admin'),
            userController.getAllUsers)
        .post(userController.createUser);

    return userRouter;
};

module.exports = routes;