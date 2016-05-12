/**
 * Created by nayab on 11/5/16.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var userSchema = new Schema({
    firstName: String,
    lastName: String,
    userName: String
});

module.exports = mongoose.model('User', userSchema);