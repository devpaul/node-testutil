var path = require('path')

function TestGroup(name, fileRegex, folderRegex, srcFolder) {
    if(!(this instanceof TestGroup))
        return new TestGroup(name, fileRegex, folderRegex, srcFolder)

    var self = this
    this.name = name
    this.isTest = isTest
    this.mapToUnit = mapToUnit
    this.fileRegex = fileRegex
    this.folderRegex = folderRegex
    this.srcFolder = srcFolder

    function isTest(filename) {
        filename = path.basename(filename)
        return self.fileRegex.test(filename)
    }

    function mapToUnit(filename) {
        var dir = replaceFolder(filename)
        var file = stripTest(filename)
        return path.join(dir, file)
    }

    function replaceFolder(filename) {
        var dir = path.dirname(filename)
        return dir.replace(self.folderRegex, self.srcFolder)
    }

    function stripTest(filename) {
        var file = path.basename(filename)
        return file.replace(self.fileRegex, '')
    }
}

TestGroup.prototype.useFilename = useFilename
TestGroup.useFilename = useFilename

function useFilename(file, replacement) {
    return path.join(path.dirname(file), replacement)
}
module.exports = TestGroup