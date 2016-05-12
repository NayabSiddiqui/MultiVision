/**
 * Created by nayab on 11/5/16.
 */
var LocalStrategy = require('passport-local').Strategy,
    mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = function (passport) {
    passport.use(new LocalStrategy({
            usernameField: 'userName',
            passwordField: 'password'
        },
        function (userName, password, done) {
            User.findOne({userName: userName})
                .exec(function (error, user) {
                    if (error) {
                        return done(error, false);
                    }
                    else {
                        if (user && user.authenticate(password)) {
                            return done(null, user);
                        }
                        else {
                            return done(null, false);
                        }
                    }
                });
        }));
};