/**
 * Created by nayab on 15/5/16.
 */
(function () {

    'use strict';

    angular.module('jedi').controller('profileController', profileController);

    profileController.$inject = ['$scope', 'authenticationService', 'identityService', 'notifierService', '$location'];

    function profileController($scope, authenticationService, identityService, notifierService, $location) {

        var currentUser = identityService.getCurrentUser();
        console.log(currentUser);
        $scope.email = currentUser.userName;
        $scope.firstName = currentUser.firstName;
        $scope.lastName = currentUser.lastName;

        $scope.update = function () {
            var updatedUserData = {
                userName: $scope.email,
                firstName: $scope.firstName,
                lastName: $scope.lastName
            }
            if($scope.password && $scope.password.length > 0) {
                updatedUserData.password = $scope.password;
            }

            authenticationService.updateUser(updatedUserData)
                .then(function () {
                    notifierService.notifySuccess('User profile updated !');
                    $location.path('/');
                }, function (reason) {
                    notifierService.notifyError(reason);
                });
        };
    }
})();