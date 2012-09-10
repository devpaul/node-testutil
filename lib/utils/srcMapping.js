var path = require('path');

module.exports = function(testutil) {
    testutil.mapToSourceDir = sourceDir;
    testutil.mapToSourceFile = resolveSource;
    testutil.requireUnit = requireUnit;

    function resolveSource(testFilename, filename) {
        if(filename)
            return path.join(sourceDir(testFilename), filename);
        return path.join(sourceDir(testFilename), stripTestPrefix(testFilename));
    }

    function stripTestPrefix(filename) {
        filename = path.basename(filename);
        return filename.replace(testutil.settings.testFileMatch, '');
    }

    function sourceDir(testFilename) {
        return path.dirname(testFilename.replace(testutil.settings.rootTestFolder, testutil.settings.rootSrcFolder));
    }

    function requireUnit(testFilename, filename) {
        return require(resolveSource(testFilename, filename));
    }
}