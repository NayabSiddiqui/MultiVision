/**
 * Created by nayab on 12/5/16.
 */
(function () {

    'use strict';

    angular.module('jedi').factory('identityService', identityService);

    identityService.$inject = ['$window', 'userService']

    function identityService($window, userService) {

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
            var user = new userService();
            angular.extend(user, $window.bootstrappedUserObject)
            setCurrentUser(user);
        }

        return {
            getCurrentUser: getCurrentUser,
            setCurrentUser: setCurrentUser,
            isAuthenticated: isAuthenticated
        };
    };
})();