/**
 * Created by nayab on 11/5/16.
 */
var Message = require('../models/messageModel'),
    passport = require('passport');

var globalRouter = require('../routes/globalRoutes')(Message),
    partialsRouter = require('../routes/partialRoutes')(),
    authRouter = require('../routes/authRoutes')();

var routeConfig = function (app) {
    app.use('/partials', partialsRouter);
    app.use('/auth', authRouter);
    app.use('*', globalRouter);
};

module.exports = routeConfig;