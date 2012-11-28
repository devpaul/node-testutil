var path = require('path')
  , testutil = global.testutil = require('../lib/index.js')
  , testGroup = createTestGroup()

global.requireUnit = function(testFilename) {
    return testutil.requireUnit(testFilename, undefined, testGroup)
}

testutil.includeTests(path.dirname(module.filename), module.exports, testGroup)

/**
 * Normally wouldn't have to create this from scratch if you are just changing the srcFolder
 * however this was done to preserve the original data in basicTestGroups
 */
function createTestGroup() {
    var TestGroup = testutil.TestGroup
    return new TestGroup( "test"
                        , "lib")
}