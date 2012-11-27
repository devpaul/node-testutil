var path = require('path')
  , proto

function TestGroup(name, fileRegex, folderRegex, srcFolder) {
    if(!(this instanceof TestGroup))
        return new TestGroup(name, fileRegex, folderRegex, srcFolder)

    this.name = name
    this.fileRegex = fileRegex
    this.folderRegex = folderRegex
    this.srcFolder = srcFolder
}

proto = TestGroup.prototype
proto.useFilename = useFilename
proto.mapToUnit = mapToUnit
proto.isTest = isTest
proto._replaceFolder = replaceFolder
proto._stripTest = stripTest

function isTest(filename) {
    filename = path.basename(filename)
    return this.fileRegex.test(filename)
}

function mapToUnit(filename) {
    var dir = this._replaceFolder(filename)
    var file = this._stripTest(filename)
    return path.join(dir, file)
}

function replaceFolder(filename) {
    var dir = path.dirname(filename)
    return dir.replace(this.folderRegex, this.srcFolder)
}

function stripTest(filename) {
    var file = path.basename(filename)
    return file.replace(this.fileRegex, '')
}

function useFilename(file, replacement) {
    return path.join(path.dirname(file), replacement)
}
module.exports = TestGroup