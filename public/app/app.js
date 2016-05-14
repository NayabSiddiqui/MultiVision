/**
 * Created by nayab on 10/5/16.
 */
(function () {
    'use strict';

    window.app = angular.module('jedi', ['ngResource', 'ngRoute']);

    window.app.config(function ($routeProvider, $locationProvider) {

        var routeRoleChecks = {
            admin: {
                auth: function (identityService, $q) {
                    console.log('auth called');
                    if (identityService.isAuthenticated() &&
                        identityService.getCurrentUser().isAdmin()) {
                        return true;
                    }
                    else {
                        return $q.reject('Not Authorized');
                    }
                }
            }
        };

        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                templateUrl: '/partials/main/main',
                controller: 'mainController'
            })
            .when('/admin/users', {
                templateUrl: '/partials/admin/userList',
                controller: 'userListController',
                resolve: routeRoleChecks.admin
            });
    });

    window.app.value('appToastr', toastr);

    window.app.run(function ($rootScope, $location) {
        $rootScope.$on('$routeChangeError', function (event, current, previous, reason) {
            if (reason === 'Not Authorized') {
                $location.path('/');
            }
        })
    })
})();

