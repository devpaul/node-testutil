var fs = require('fs')
  , path = require('path')
  , config = require('../model/config.js')

function includeTests(file, target, testGroup) {
    file = path.resolve(file)
    target = target || {}
    testGroup = testGroup || config.testGroup
    var stats = fs.lstatSync(file)
    if(stats.isDirectory())
        includeTestFolder(file, target)
    else if(testGroup.isTest(file))
        mixinTestModule(file, target)

    return target
}

function includeTestFolder(dir, target) {
    if(config.verbose === true)
        console.log("[TestUtil] Entering: " + dir)
    var ls = fs.readdirSync(dir)
    for(var i = ls.length - 1; i >= 0; i--) {
        var file = path.join(dir, ls[i])
        includeTests(file, target)
    }
}

function mixinTestModule(file, target) {
    if(config.verbose === true)
        console.log('[TestUtil] Adding Test: ' + file)
    var key = path.basename(file)
    if(target.hasOwnProperty(key))
        key = file
    target[key] = require(file)
}

module.exports = includeTests