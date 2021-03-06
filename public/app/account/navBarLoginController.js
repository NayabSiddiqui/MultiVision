/**
 * Created by nayab on 11/5/16.
 */
(function () {
    'use strict';

    angular.module('jedi').controller('navBarLoginController', navBarLoginController);

    navBarLoginController.$inject = ['$scope', 'notifierService', 'identityService', 'authenticationService', '$location'];

    function navBarLoginController($scope, notifierService, identityService, authenticationService, $location) {

        $scope.fullName = null;

        function setUserFullName() {
            var currentUser = identityService.getCurrentUser();
            $scope.fullName = currentUser.firstName + " " + currentUser.lastName;
        };

        $scope.isAuthenticated = function () {
            if(identityService.isAuthenticated()){
                setUserFullName();
                return true;
            }
            else {
                return false;
            }
        };

        $scope.isAdmin = function () {
            return identityService.getCurrentUser()!= null &&  identityService.getCurrentUser().isAdmin();
        };

        $scope.signIn = function (userName, password) {
            authenticationService.authenticateUser(userName, password)
                .then(function (success) {
                    if(success) {
                        notifierService.notifySuccess('You have successfully logged in !');
                        setUserFullName();
                    }
                    else {
                        notifierService.notifyError("Incorrect username or password !");
                    }
                });
        };

        $scope.signUp = function () {
            $location.path('/signUp');
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