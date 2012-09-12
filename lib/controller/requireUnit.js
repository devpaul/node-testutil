var path = require('path');
var config = require('../model/config.js');

module.exports = function(testFilename, filename, testGroup) {
    if(!testGroup)
        testGroup = config.testGroup;
    var unit = testGroup.mapToUnit(testFilename);
    if(filename)
        unit = testGroup.useFilename(unit, filename);
    return require(unit);
};