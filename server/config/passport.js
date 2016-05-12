/**
 * Created by nayab on 11/5/16.
 */
var passport = require('passport'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = function () {
    require('./strategies/local.strategy')(passport);

    passport.serializeUser(function (user, done) {
        if (user) {
            return done(null, user._id);
        }
    });

    passport.deserializeUser(function (id, done) {
        User.findOne({_id: id})
            .exec(function (error, user) {
                if (user) {
                    return done(null, user);
                }
                else {
                    return done(null, false);
                }
            });
    });


};