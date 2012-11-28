var TestGroup = requireUnit(module.filename)
  , path = require('path')
  , TestGroupUtil = require('./TestGroupUtil.js')

exports['TestData has expected properties'] = function(test) {
    test.ok(TestGroup)
    test.ok(TestGroup.prototype.useFilename)
    test.done()
}

TestGroupUtil.testTestGroup(createTestGroupData(), exports)
exports['isATest'] = TestGroupUtil.parameterizeIsATest(createIsATestData())
exports['mapToUnit'] = TestGroupUtil.parameterizeMapToUnit(createMapToUnitTestData())

function createTestGroupData() {
    var Data = TestGroupUtil.testTestGroup.Data
    var srcFolder = 'src'
      , testFolder = 'test'
      , testFileRegex = /(^test-)/
      , testGroup = new TestGroup(testFolder, srcFolder, testFileRegex)

    return new Data(testGroup, testFolder, srcFolder, testFileRegex)
}

function createIsATestData() {
    var testGroup = new TestGroup('test', 'src')
    return [ [testGroup, 'test-pants.js', true]
           , [testGroup, 'notatest.js', false]
           ]
}

function createMapToUnitTestData() {
    var testGroup = new TestGroup('test', 'src')
    return [ [testGroup, 'test/test-test.js', path.join(path.resolve('src'), 'test.js')]
           , [testGroup, path.join(path.resolve('test'), 'notatest.js'), path.join(path.resolve('src'), 'notatest.js')]
           ]
}