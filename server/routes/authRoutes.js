/**
 * Created by nayab on 11/5/16.
 */
var authRouter = require('express').Router(),
    passport = require('passport');

var routes = function () {
    authRouter.route('/login')
        .post(function (request, response, next) {
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
        });

    return authRouter;
};

module.exports = routes;