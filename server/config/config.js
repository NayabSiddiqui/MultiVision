/**
 * Created by nayab on 11/5/16.
 */
var path = require('path');

var rootPath = path.normalize(__dirname + '/../../')

var config = {
    development: {
        db: 'mongodb://localhost:27017/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        db: 'mongodb://sa:service@ds019882.mlab.com:19882/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
};

module.exports = config;