var unit = requireUnit(__filename)
  , path = require('path')
  , TestGroup = testutil.TestGroup
  , testGroup = new TestGroup()

exports['is constructed properly'] = function(test) {
    test.ok(unit)
    test.ok(unit._resolve)
    test.done()
}
exports['maps to source folder'] = function(test) {
    var filename = 'pants.js'
    test.equal(unit._resolve(filename), path.join(path.resolve('lib'), filename))
    test.done()
}

exports['requireSrc'] = function(test) {
    var filename = 'controller/requireSrc.js'
      , testGroup = new TestGroup()
    test.equal(unit, unit(filename, testGroup))
    test.done()
}
