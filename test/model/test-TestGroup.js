var TestGroup = requireUnit(module.filename);
var createTestGroupSuite = require('./createTestGroupSuite.js');

exports['TestData has expected properties'] = function(test) {
    test.ok(TestGroup);
    test.ok(TestGroup.prototype.useFilename);
    test.ok(TestGroup.prototype.useFilename);
    test.done();
}

var name = testutil.anyString();
var srcFolder = 'src';
var testGroup = new TestGroup(name, /(^test-)/, /(test)(?=\/|$)/, srcFolder);
var mapToUnitData = [
    ["/some/folders/test/com/devpaul/test-file.js", "/some/folders/src/com/devpaul/file.js"],
    ["./test-file.js", "file.js"],
    generateRandomMapTest()
];

var data = createTestGroupSuite.Data(testGroup, name, srcFolder
    , "test-" + testutil.anyString, testutil.anyString
    , mapToUnitData);

createTestGroupSuite(data, exports);

function generateRandomMapTest() {
    var dir = testutil.anyString();
    var file = testutil.anyString();
    var original = dir + "/test/" + dir + "/test-" + file + ".js";
    var expected = dir + "/src/" + dir + "/" + file + ".js";
    return [original, expected];
}