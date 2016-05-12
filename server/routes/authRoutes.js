/**
 * Created by nayab on 11/5/16.
 */
var authRouter = require('express').Router(),
    controller = require('../controllers/authController')();

var routes = function () {
    authRouter.route('/login')
        .post(controller.authenticate);

    return authRouter;
};

module.exports = routes;