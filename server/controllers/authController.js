/**
 * Created by nayab on 12/5/16.
 */
var passport = require('passport');

var authController = function () {

    var authenticate = function (request, response, next) {
        var auth = passport.authenticate('local', {
                session: false
            },
            function (error, user) {
                if (error) {
                    return next(error);
                }
                if (!user) {
                    response.send({success: false});
                }

                request.logIn(user, function (error) {
                    if (error) {
                        return next(error);
                    }
                    response.send({success: true, user: user});
                });
            });
        auth(request, response, next);
    };

    return {
        authenticate: authenticate
    };
};

module.exports = authController;