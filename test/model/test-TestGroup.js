var TestGroup = requireUnit(module.filename)
  , createTestGroupSuite = require('./createTestGroupSuite.js')
  , data = createTestGroupData()

exports['TestData has expected properties'] = function(test) {
    test.ok(TestGroup)
    test.ok(TestGroup.prototype.useFilename)
    test.done()
}

createTestGroupSuite(data, exports)

function generateRandomMapTest() {
    var dir = testutil.anyString()
    var file = testutil.anyString()
    var original = dir + "/test/" + dir + "/test-" + file + ".js"
    var expected = dir + "/src/" + dir + "/" + file + ".js"
    return [original, expected]
}

function createTestGroupData() {
    var name = testutil.anyString()
      , srcFolder = 'src'
      , testGroup = new TestGroup(name, /(^test-)/, /(test)(?=\/|$)/, srcFolder)
      , mapToUnitData = [ ["/some/folders/test/com/devpaul/test-file.js", "/some/folders/src/com/devpaul/file.js"]
                        , ["./test-file.js", "file.js"]
                        , generateRandomMapTest()
                        ]

    return createTestGroupSuite.Data(testGroup, name, srcFolder
                                    , "test-" + testutil.anyString, testutil.anyString, mapToUnitData)
}