/**
 * Created by nayab on 12/5/16.
 */
(function () {

    'use strict';

    window.app.factory('identityService', identityService);

    function identityService() {
        var currentUser = undefined;

        var isAuthenticated = function () {
            return !!currentUser;
        };

        var setUser = function (user) {
            currentUser = user;
        };

        return {
            currentUser: currentUser,
            isAuthenticated: isAuthenticated,
            setUser: setUser
        };
    };
})();