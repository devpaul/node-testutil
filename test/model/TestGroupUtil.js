var assert = require('assert')
  , path = require('path')
  , parameterize = testutil.parameterize

exports['testTestGroup'] = testTestGroup
exports['parameterizeIsATest'] = parameterizeIsATest
exports['parameterizeMapToUnit'] = parameterizeMapToUnit

function testTestGroup(testData, suite) {
    suite = suite || {}

    assert.ok(testData)
    assert.ok(testData.testGroup)
    assert.ok(testData.srcFolder)
    assert.ok(testData.testFolder)
    assert.ok(testData.fileRegex)

    suite['is correctly constructed'] = function(test) {
        test.ok(testData.testGroup.isTest)
        test.ok(testData.testGroup.mapToUnit)
        test.ok(testData.testGroup.fileRegex)
        test.ok(testData.testGroup.testFolder)
        test.ok(testData.testGroup.srcFolder)
        test.done()
    }

    suite['has src folder'] = function(test) {
        test.equal(testData.testGroup.srcFolder, testData.srcFolder)
        test.done()
    }

    suite['has test folder'] = function(test) {
        test.equal(testData.testFolder, testData.testGroup.testFolder)
        test.done()
    }

    suite['has test file regex'] = function(test) {
        test.equal(testData.fileRegex, testData.testGroup.fileRegex)
        test.done()
    }

    return suite
}

testTestGroup.Data = testTestGroupData

function testTestGroupData(testGroup, testFolder, srcFolder, fileRegex) {
    if(!(this instanceof testTestGroupData))
        return new testTestGroupData(testGroup, testFolder, srcFolder, fileRegex)

    this.testGroup = testGroup
    this.srcFolder = path.resolve(srcFolder)
    this.testFolder = path.resolve(testFolder)
    this.fileRegex = fileRegex
}

function parameterizeIsATest(data) {
    return parameterize(data, testFunc, 'correctly identifies tests')

    function testFunc(test, testGroup, value, expected) {
        test.equal(expected, testGroup.isTest(value))
        test.done()
    }
}

function parameterizeMapToUnit(data) {
    return parameterize(data, testFunc, 'correctly maps to unit')

    function testFunc(test, testGroup, value, expected) {
        var actual = testGroup.mapToUnit(value)
        test.equal(actual, expected)
        test.done()
    }
}