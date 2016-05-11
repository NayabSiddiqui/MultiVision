/**
 * Created by nayab on 11/5/16.
 */
(function () {
    'use strict'

    window.app.controller('navBarLoginController', navBarLoginController);

    navBarLoginController.$inject = ['$scope'];

    function navBarLoginController($scope) {
        $scope.signIn = function (username, password) {
            console.log("Login called.. Still to be implemented...");
        };
    };
})();