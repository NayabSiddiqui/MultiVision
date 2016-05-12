/**
 * Created by nayab on 11/5/16.
 */
(function () {
    'use strict';

    window.app.controller('navBarLoginController', navBarLoginController);

    navBarLoginController.$inject = ['$scope', 'notifierService', 'identityService', 'authenticationService'];

    function navBarLoginController($scope, notifierService, identityService, authenticationService) {

        $scope.identity = identityService;

        $scope.signIn = function (userName, password) {
            authenticationService.authenticateUser(userName, password)
                .then(function (success) {
                    if(success) {
                        notifierService.notifySuccess('You have successfully logged in !')
                    }
                    else {
                        notifierService.notifyError("Incorrect username or password !");
                    }
                });
        };
    };
})();