/**
 * Created by nayab on 12/5/16.
 */
(function () {

    'use strict';

    window.app.factory('authenticationService', authenticationService);

    authenticationService.$inject = ['$http', 'identityService', '$q'];

    function authenticationService($http, identityService, $q) {

        var authenticateUser = function (userName, password) {
            var deferred  = $q.defer();
            $http.post('/auth/login', {
                    userName: userName,
                    password: password
                })
                .then(function (response) {
                    if(response.data.success) {
                        identityService.setUser(response.data.user);
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
                    identityService.setUser(null);
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