/**
 * Created by nayab on 15/5/16.
 */
(function () {

    'use strict';

    angular.module('jedi').controller('signUpController', signUpController);

    signUpController.$inject = ['$scope', 'authenticationService', 'notifierService', '$location'];

    function signUpController($scope, authenticationService, notifierService, $location) {

        $scope.signUp = function () {
            var newUserData = {
                userName: $scope.email,
                password: $scope.password,
                firstName: $scope.firstName,
                lastName: $scope.lastName
            };

            authenticationService.createUser(newUserData)
                .then(function () {
                    notifierService.notifySuccess('User account created !');
                    $location.path('/');
                }, function (reason) {
                    notifierService.notifyError(reason);
                });
        };
    };
})();