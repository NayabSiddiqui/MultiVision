/**
 * Created by nayab on 10/5/16.
 */
(function () {
    'use strict';

    window.app.controller('mainController', mainController);
    mainController.$inject = ['$scope'];

    function mainController($scope) {
        $scope.myVar = "Hello Angular";
    };
})();