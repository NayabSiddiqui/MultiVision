/**
 * Created by nayab on 14/5/16.
 */

describe('UserService', function () {

    beforeEach(module('jedi'));

    describe('isAdmin', function () {
        it('should return false if the user is not an admin', function (userService) {
            var user = new userService();
            user.roles = ['generic', 'not admin'];
            expect(true).toBe(false);
        });

        it('should return true if the user is an admin', function (userService) {
            var user = new userService();
            user.roles = ['generic', 'not admin'];
            console.log(user.isAdmin());
            expect(true).toBe(false);
        });
    });
});
