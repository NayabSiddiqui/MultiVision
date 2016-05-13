/**
 * Created by nayab on 12/5/16.
 */
(function () {

    'use strict';

    window.app.factory('identityService', identityService);

    identityService.$inject = ['$window']

    function identityService($window) {

        var currentUser = null;

        var isAuthenticated = function () {
            return currentUser != null;
        };

        var getCurrentUser = function () {
            return currentUser;
        };

        var setCurrentUser = function (user) {
            currentUser = user;
        }

        if(!!$window.bootstrappedUserObject) {
            setCurrentUser($window.bootstrappedUserObject);
            console.log(currentUser);
            console.log($window.bootstrappedUserObject);
        }

        return {
            getCurrentUser: getCurrentUser,
            setCurrentUser: setCurrentUser,
            isAuthenticated: isAuthenticated
        };
    };
})();