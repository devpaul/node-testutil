var unit = requireUnit(module.filename)
  , createTestGroupSuite = require('./createTestGroupSuite.js')
  , testGroupSuite = exports.testGroupSuite = {}
  , testMapToUnitData = [ ["/some/folders/test/com/devpaul/test-file.js", "/some/folders/src/com/devpaul/file.js"]
                        , ["./test-file.js", "file.js"]
                        ]
  , testData = createTestGroupSuite.Data( unit.testGroup, "test", "src"
                                        , "test-yesthisisatest.js", "noatest.js", testMapToUnitData)
  , integrationGroupSuite = exports.integrationGroupSuite = {}
  , intMapToUnitData = [ ["/some/folders/test/com/devpaul/integration-file.js", "/some/folders/src/com/devpaul/file.js"]
                       , ["./integration-file.js", "file.js"]
                       ]
  , intData = createTestGroupSuite.Data( unit.integrationGroup, "integration", "src"
                                       , "integration-yesthisisatest.js", "noatest.js", intMapToUnitData)

exports['is correctly constructed'] = function(test) {
    test.ok(unit.testGroup)
    test.ok(unit.integrationGroup)
    test.done()
}

// Test the construction and usage of the "test" TestGroup
createTestGroupSuite(testData, testGroupSuite)

// Test the construction and usage of the "integration" TestGroup
createTestGroupSuite(intData, integrationGroupSuite)