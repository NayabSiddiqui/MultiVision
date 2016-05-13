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

    var requiresAuthenticatedRequest = function (request, response, next) {
        if(!request.isAuthenticated()) {
            response.status(403);
            response.end();
        }
        else {
            next();
        }
    };

    var requiresRole = function (role) {
        return function (request, response, next) {
            if(!request.isAuthenticated() || request.user.roles.indexOf(role) == -1) {
                response.status(403);
                response.end();
            }
            else {
                next();
            }
        }
    };

    var logout = function (request, response) {
        request.logout();
        response.end();
    };

    return {
        authenticate: authenticate,
        requiresAuthenticatedRequest: requiresAuthenticatedRequest,
        requiresRole: requiresRole,
        logout: logout
    };
};

module.exports = authController;