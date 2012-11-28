var unit = requireUnit(__filename)
  , path = require('path')
  , TestGroup = testutil.TestGroup
  , testGroup = new TestGroup()

exports['maps to source folder'] = function(test) {
    var filename = 'pants.js'
    test.equal(unit(filename), path.join(path.resolve('lib'), filename))
    test.done()
}