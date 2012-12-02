var path = require('path')
  , config = require('../model/config.js')

function requireSrc(src, testGroup) {
    var srcpath = resolve(src, testGroup)
    return require(srcpath)
}

function resolve(src, testGroup) {
    testGroup = testGroup || config.testGroup
    return path.join(testGroup.srcFolder, src)
}

requireSrc._resolve = resolve

module.exports = requireSrc