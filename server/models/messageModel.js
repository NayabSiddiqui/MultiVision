/**
 * Created by nayab on 10/5/16.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var messageSchema = new Schema({
    message : String
});

module.exports = mongoose.model('Message', messageSchema);