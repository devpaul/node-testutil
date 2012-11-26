var path = require('path')
  , config = require('../model/config.js')

function requireUnit(testFilename, filename, testGroup) {
    var unit
    testGroup = testGroup || config.testGroup
    unit = testGroup.mapToUnit(testFilename)
    if(filename)
        unit = testGroup.useFilename(unit, filename)
    return require(unit)
}

module.exports = requireUnit