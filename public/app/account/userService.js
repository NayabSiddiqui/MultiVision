/**
 * Created by nayab on 13/5/16.
 */
(function () {

    window.app.factory('userService', userService);

    userService.$inject = ['$resource'];

    function userService($resource) {
        var UserResource = $resource('api/users/:id', {_id: "@id"});

        UserResource.prototype.isAdmin = function () {
            return this.roles && this.roles.indexOf('admin') > -1;
        };

        return UserResource;
    }
})();