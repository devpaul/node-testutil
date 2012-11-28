var path = require('path')
  , config = require('../model/config.js')

function requireSrc(src, testGroup) {
    testGroup = testGroup || config.testGroup
    return path.join(testGroup.srcFolder, src)
}

module.exports = requireSrc