exports.TestGroup = require('./model/TestGroup.js')
exports.MockFunction = require('./mocks/MockFunction.js')
exports.config = require('./model/config.js')

exports.parameterize = require('./controller/parameterize.js')
exports.requireUnit = require('./controller/requireUnit.js')
exports.requireSrc = require('./controller/requireSrc.js')
exports.includeTests = require('./controller/includeTests.js')
exports.findFolder = require('./controller/findFolder.js')

exports.setSrcFolder = function(folder) {
    exports.config.testGroup.srcFolder = folder
}

exports.anyInt = require('./util/anyInt.js')
exports.anyString = require('./util/anyString.js')