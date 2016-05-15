/**
 * Created by nayab on 10/5/16.
 */
(function () {
    'use strict';

    angular.module('jedi', ['ngResource', 'ngRoute']);

    angular.module('jedi').config(function ($routeProvider, $locationProvider) {

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
            })
            .when('/signUp', {
                templateUrl: '/partials/account/signUp',
                controller: 'signUpController'
            });
    });

    angular.module('jedi').value('appToastr', toastr);

    angular.module('jedi').run(function ($rootScope, $location) {
        $rootScope.$on('$routeChangeError', function (event, current, previous, reason) {
            if (reason === 'Not Authorized') {
                $location.path('/');
            }
        })
    })
})();

