/**
 * Created by nayab on 12/5/16.
 */
(function () {

    'use strict';

    angular.module('jedi').factory('authenticationService', authenticationService);

    authenticationService.$inject = ['$http', 'identityService', '$q', 'userService'];

    function authenticationService($http, identityService, $q, userService) {

        var authenticateUser = function (userName, password) {
            var deferred  = $q.defer();
            $http.post('/auth/login', {
                    userName: userName,
                    password: password
                })
                .then(function (response) {
                    if(response.data.success) {
                        var user = new userService();
                        angular.extend(user, response.data.user);
                        identityService.setCurrentUser(user);
                        deferred.resolve(true);
                    }
                    else {
                        deferred.resolve(false);
                    }
                });

            return deferred.promise;
        };

        var logoutUser = function () {
            var deferred = $q.defer();
            $http.post('/auth/logout', {
                logout: true
            })
                .then(function () {
                    identityService.setCurrentUser(null);
                    deferred.resolve();
                });
            return deferred.promise;
        };

        return {
            authenticateUser: authenticateUser,
            logoutUser: logoutUser
        };
    };
})();