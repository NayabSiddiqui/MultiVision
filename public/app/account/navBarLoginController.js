/**
 * Created by nayab on 11/5/16.
 */
(function () {
    'use strict';

    window.app.controller('navBarLoginController', navBarLoginController);

    navBarLoginController.$inject = ['$scope', 'notifierService', 'identityService', 'authenticationService', '$location'];

    function navBarLoginController($scope, notifierService, identityService, authenticationService, $location) {

        $scope.identiy = identityService;

        $scope.fullName = null;

        $scope.signIn = function (userName, password) {
            authenticationService.authenticateUser(userName, password)
                .then(function (success) {
                    if(success) {
                        notifierService.notifySuccess('You have successfully logged in !');
                        $scope.fullName = identityService.currentUser.firstName + " " + identityService.currentUser.lastName;
                    }
                    else {
                        notifierService.notifyError("Incorrect username or password !");
                    }
                });
        };

        $scope.signOut = function () {
            authenticationService.logoutUser()
                .then(function () {
                    $scope.userName = "";
                    $scope.password = "";
                    notifierService.notifySuccess('You have successfully logged out !');
                    $location.path('/');
                });
        };
    };
})();