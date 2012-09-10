var mocks = {
    "MockExpressResponse" : require('./mocks/MockExpressResponse.js'),
    "MockExpressServer" : require('./mocks/MockExpressServer.js')
}

var settings = {
    verbose : false,
    testFileMatch : /(^test-)(?:.+)$/,
    rootTestFolder : "/test/",
    rootSrcFolder : "/lib/"
}

require('./utils/mixinTests.js')(exports);
require('./utils/srcMapping.js')(exports);
require('./utils/testHelpers.js')(exports);

exports['mocks'] = mocks;
exports['settings'] = settings;

