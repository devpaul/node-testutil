exports.TestGroup = require('./model/TestGroup.js')
exports.MockFunction = require('./mocks/MockFunction.js')
exports.config = require('./model/config.js')
exports.groups = require('./model/basicTestGroups.js')

exports.parameterize = require('./controller/parameterize.js')
exports.requireUnit = require('./controller/requireUnit.js')
exports.includeTests = require('./controller/includeTests.js')

exports.setSrcFolder = function(folder) {
    exports.config.testGroup.srcFolder = folder
}

exports.anyInt = require('./util/anyInt.js')
exports.anyString = require('./util/anyString.js')