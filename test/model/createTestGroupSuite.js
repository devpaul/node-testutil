var assert = require('assert');

module.exports = createTestGroupSuite;

function createTestGroupSuite(testData, suite) {
    assert.ok(testData);
    assert.ok(testData.testGroup);
    assert.ok(testData.name);
    assert.ok(testData.srcFolder);
    assert.ok(testData.isATest);
    assert.ok(testData.isNotATest);
    assert.ok(testData.mapToUnitData);

    suite['is correctly constructed'] = function(test) {
        test.ok(testData.testGroup.name);
        test.ok(testData.testGroup.isTest);
        test.ok(testData.testGroup.mapToUnit);
        test.ok(testData.testGroup.fileRegex);
        test.ok(testData.testGroup.folderRegex);
        test.ok(testData.testGroup.srcFolder);
        test.done();
    }

    suite['has name'] = function(test) {
        test.equal(testData.name, testData.testGroup.name);
        test.done();
    }

    suite['has src folder'] = function(test) {
        test.equal(testData.srcFolder, testData.testGroup.srcFolder);
        test.done();
    }

    suite['correctly identifies tests'] = function(test) {
        test.equal(true, testData.testGroup.isTest(testData.isATest));
        test.done();
    }

    suite['correctly identifes files that are not tests'] = function(test) {
        test.equal(false, testData.testGroup.isTest(testData.isNotATest));
        test.done();
    }

    suite['correctly maps to unit'] = testutil.parameterize(testData.mapToUnitData,
        function(test, original, expected) {
            var actual = testData.testGroup.mapToUnit(original);
            test.equal(actual, expected);
            test.done();
        }
    );

    return suite;
}

createTestGroupSuite.Data = Data;

function Data(testGroup, name, srcFolder, isATest, isNotATest, mapToUnitData) {
    if(!(this instanceof Data))
        return new Data(testGroup, name, srcFolder, isATest, isNotATest, mapToUnitData);

        this.testGroup = testGroup;
        this.name = name;
        this.srcFolder = srcFolder;
        this.isATest = isATest;
        this.isNotATest = isNotATest;
        this.mapToUnitData = mapToUnitData;
}