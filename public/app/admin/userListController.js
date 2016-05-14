/**
 * Created by nayab on 13/5/16.
 */
(function () {

    'use strict';

    window.app.controller('userListController', userListController);

    userListController.$inject = ['$scope', 'userService'];

    function userListController($scope, userService) {
        $scope.users = userService.query();
    };
})();