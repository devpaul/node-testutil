var unit = requireUnit(module.filename);
var createTestGroupSuite = require('./createTestGroupSuite.js');

exports['is correctly constructed'] = function(test) {
    test.ok(unit.testGroup);
    test.ok(unit.integrationGroup);
    test.done();
}

// Test the construction and usage of the "test" TestGroup
var testGroupSuite = exports.testGroupSuite = {};

var testMapToUnitData = [
    ["/some/folders/test/com/devpaul/test-file.js", "/some/folders/src/com/devpaul/file.js"],
    ["./test-file.js", "file.js"]
];

var testData = createTestGroupSuite.Data(unit.testGroup, "test", "src"
                                        , "test-yesthisisatest.js", "noatest.js", testMapToUnitData);
createTestGroupSuite(testData, testGroupSuite);

// Test the construction and usage of the "integration" TestGroup
var integrationGroupSuite = exports.integrationGroupSuite = {};

var intMapToUnitData = [
    ["/some/folders/test/com/devpaul/integration-file.js", "/some/folders/src/com/devpaul/file.js"],
    ["./integration-file.js", "file.js"]
];

var intData = createTestGroupSuite.Data(unit.integrationGroup, "integration", "src"
                                        , "integration-yesthisisatest.js", "noatest.js", intMapToUnitData);
createTestGroupSuite(intData, integrationGroupSuite);