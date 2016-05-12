/**
 * Created by nayab on 12/5/16.
 */
var crypto = require('crypto');

var passwordUtility = function () {
    var createSalt = function () {
        return crypto.randomBytes(128).toString('base64');
    };

    var hashPassword = function (salt, password) {
        var hmac = crypto.createHmac('sha1', salt);
        return hmac.update(password).digest('hex');
    };

    return {
        createSalt: createSalt,
        hashPassword: hashPassword
    };
};

module.exports = passwordUtility;