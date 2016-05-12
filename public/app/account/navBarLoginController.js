/**
 * Created by nayab on 11/5/16.
 */
(function () {
    'use strict';

    window.app.controller('navBarLoginController', navBarLoginController);

    navBarLoginController.$inject = ['$scope', '$http'];

    function navBarLoginController($scope, $http) {
        $scope.signIn = function (userName, password) {
            $http.post('/auth/login', {
                userName: userName,
                password: password
            })
                .then(function (response) {
                    if(response.data.success) {
                        console.log('logged in !');
                    }
                    else {
                        console.log("could not sign in..");
                    }
                });
        };
    };
})();