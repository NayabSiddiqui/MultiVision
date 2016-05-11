/**
 * Created by nayab on 11/5/16.
 */
var Message = require('../models/messageModel');

var globalRouter = require('../routes/globalRoutes')(Message),
    partialsRouter = require('../routes/partialRoutes')();

var routeConfig = function (app) {
    app.use('/partials', partialsRouter);
    app.use('*', globalRouter);
};

module.exports = routeConfig;