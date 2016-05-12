/**
 * Created by nayab on 11/5/16.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passwordUtility = require('../utilities/passwordUtility')();


var userSchema = new Schema({
    firstName: String,
    lastName: String,
    userName: String,
    salt: String,
    hashedPassword: String
});

userSchema.methods = {
    authenticate: function (passwordToMatch) {
        return passwordUtility.hashPassword(this.salt, passwordToMatch) === this.hashedPassword;
    }
};

module.exports = mongoose.model('User', userSchema);