var unit = requireUnit(__filename)
  , path = require('path')
  , DEFAULTFS = path.resolve('./test-assets/includeTestDefaultBehavior')
  , testGroup = createTestGroup(DEFAULTFS)

function createTestGroup(base) {
    var TestGroup = testutil.TestGroup
      , testFolder = path.join(base, 'test')
      , srcFolder = path.join(base, 'src')
      return new TestGroup(testFolder, srcFolder)
}

exports['is correctly constructed'] = function(test) {
    test.ok(unit)
    test.done()
}

exports['requireUnit requires mappedUnit'] = function(test) {
    var mod = unit(DEFAULTFS + '/test/test-mocktest.js', undefined, testGroup)
    test.ok(mod)
    test.equals("mocktest", mod.name)
    test.done()
}

exports['requireUnit filename provided - uses filename'] = function(test) {
    var mod = unit(DEFAULTFS + '/test/config/test-mockconfig.json.js', 'mockconfig.json', testGroup)
    test.ok(mod)
    test.equals("mockconfig", mod.name)
    test.done()
}