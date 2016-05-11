/**
 * Created by nayab on 10/5/16.
 */
var globalRouter = require('express').Router();

var routes = function (Message) {

    var globalController = require('../controllers/globalController')(Message);

    globalRouter.route('*')
        .get(globalController.get);

    return globalRouter;
};

module.exports = routes;