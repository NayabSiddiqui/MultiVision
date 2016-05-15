/**
 * Created by nayab on 12/5/16.
 */
(function () {

    'use strict';

    angular.module('jedi').factory('notifierService', notifierService);

    notifierService.$inject = ['appToastr'];

    function notifierService(appToastr) {

        var notifySuccess = function (message) {
                appToastr.success(message);
                console.log(message);
        };

        var notifyError = function (message) {
            appToastr.error(message);
            console.log(message);
        };

        return {
            notifySuccess: notifySuccess,
            notifyError: notifyError
        };
    };
})();