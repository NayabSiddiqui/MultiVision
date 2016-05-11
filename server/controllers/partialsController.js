/**
 * Created by nayab on 11/5/16.
 */
var partialsController = function () {
    var get = function (request, response) {
        response.render('../../public/app' + request.params[0]);
    };

    return {
        get: get
    };
};

module.exports = partialsController;