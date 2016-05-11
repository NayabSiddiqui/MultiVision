/**
 * Created by nayab on 10/5/16.
 */
var partialRouter = require('express').Router();

var routes = function () {

    var controller = require('../controllers/partialsController')();

    partialRouter.route('*')
        .get(controller.get);

    return partialRouter;
};

module.exports = routes;