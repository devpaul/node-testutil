var fs = require('fs');
var path = require('path');

module.exports = function(testutil) {
    testutil.includeTests = includeTests;
    testutil.includeTestFolder = includeTestFolder;
    testutil.mixinTest = mixinTest;
    testutil.isTestFile = isTestFile;

    function includeTests(file, target) {
        if(!target)
            target = {};
        console.log(file);
        var stats = fs.lstatSync(file);
        if(stats.isDirectory())
            includeTestFolder(file, target);
        else
            mixinTest(file, target);

        return target;
    }

    function includeTestFolder(dir, target) {
        if(!target)
            target = {};
        if(testutil.settings.verbose === true)
            console.log("[TestUtil] Entering: " + dir);
        var ls = fs.readdirSync(dir);
        for(var i = ls.length - 1; i >= 0; i--) {
            var file = path.join(dir, ls[i]);
            includeTests(file);
        }

        return target;
    }

    function mixinTest(file, target) {
        if(!isTestFile(file))
            return;
        if(testutil.settings.verbose === true)
            console.log('[TestUtil] Adding Test: ' + file);
        target[path.basename(file)] = require(file);
    }

    function isTestFile(file) {
        file = path.basename(file);
        return testutil.settings.testFileMatch.test(file);
    }
};