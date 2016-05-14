/**
 * Created by nayab on 10/5/16.
 */
(function () {
    'use strict';

    window.app = angular.module('jedi', ['ngResource', 'ngRoute']);

    window.app.config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                templateUrl: '/partials/main/main',
                controller: 'mainController'
            })
            .when('/admin/users', {
                templateUrl: '/partials/admin/userList',
                controller: 'userListController'
            });
    });

    window.app.value('appToastr', toastr);
})();

