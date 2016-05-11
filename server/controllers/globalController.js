/**
 * Created by nayab on 10/5/16.
 */
var globalController = function (Message) {
    
    var get = function (request, response) {
        Message.findOne().exec(function (error, messageDoc) {
            if (error) {
                response.status(500);
                response.send('Internal error occurred !');
            }
            else {
                response.render('index');
            }
        });
    };

    return {
        get: get
    };
};

module.exports = globalController;