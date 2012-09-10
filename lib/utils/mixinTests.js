var fs = require('fs');
var path = require('path');

module.exports = function(testutil) {
    testutil.recursivelyMixinTests = recursivelyMixinTests;
    testutil.mixinTest = mixinTest;
    testutil.isTestFile = isTestFile;

    function recursivelyMixinTests(dir, target) {
        dir = path.dirname(dir);
        console.log(dir);
        var ls = fs.readdirSync(dir);
        for(var i = ls.length - 1; i >= 0; i--) {
            var file = path.join(dir, ls[i]);
            var stats = fs.lstatSync(file);
            if(stats.isDirectory())
                recursivelyMixinTests(file, target);
            else
                mixinTest(file, target);
        }
    }

    function mixinTest(file, target) {
        if(isTestFile(file)) {
            if(testutil.settings.verbose === true)
                console.log('adding Test ' + file);
            target[path.basename(file)] = require(file);
        }
    }

    function isTestFile(file) {
        file = path.basename(file);
        return testutil.settings.testFileMatch.test(file);
    }
}