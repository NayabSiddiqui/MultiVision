/**
 * Created by nayab on 13/5/16.
 */
(function () {

    angular.module('jedi').factory('userService', userService);

    userService.$inject = ['$resource'];

    function userService($resource) {
        var UserResource = $resource('api/users/:id',
            {_id: "@id"},
            {
                update: {
                    method: 'PUT',
                    isArray: false
                }
            });

        UserResource.prototype.isAdmin = function () {
            return this.roles && this.roles.indexOf('admin') > -1;
        };

        return UserResource;
    }
})();