/**
 * Created by nayab on 11/5/16.
 */
var partialsController = function () {
    var get = function (request, response) {
        response.render('partials/' + request.params.partialPath);
    };

    return {
        get: get
    };
};

module.exports = partialsController;