/**
 * Created by nayab on 11/5/16.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passwordUtility = require('../utilities/passwordUtility')();


var userSchema = new Schema({
    firstName: {
        type: String,
        required: '{PATH} is required.'
    },
    lastName: {
        type: String,
        required: '{PATH} is required.'
    },
    userName: {
        type: String,
        required: '{PATH} is required.',
        unique: true
    },
    salt: {
        type: String,
        required: '{PATH} is required.'
    },
    hashedPassword: {
        type: String,
        required: '{PATH} is required.'
    },
    roles: [String]
});

userSchema.methods = {
    authenticate: function (passwordToMatch) {
        return passwordUtility.hashPassword(this.salt, passwordToMatch) === this.hashedPassword;
    }
};

module.exports = mongoose.model('User', userSchema);