/**
 * Created by nayab on 12/5/16.
 */
(function () {

    'use strict';

    window.app.factory('identityService', identityService);

    function identityService() {
        var currentUser = null;

        var isAuthenticated = function () {
            return this.currentUser != null;
        };

        var setUser = function (user) {
            this.currentUser = user;
        };

        return {
            currentUser: currentUser,
            isAuthenticated: isAuthenticated,
            setUser: setUser
        };
    };
})();