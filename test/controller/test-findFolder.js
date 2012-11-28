var findFolder = requireUnit(__filename)
  , path = require('path')
  , TESTFOLDERBASE = path.resolve('./test-assets/findFolder')
  , DEFAULTFS = path.join(TESTFOLDERBASE, 'mockSrcStructure')
  , FOLDERDATA = [ ['mockSrcStructure', 'mockSrcStructure/test', ['src', 'test']]
                 , ['mockLibStructure', 'mockLibStructure/test', ['lib', 'test']]
                 , ['mockTestUnitStructure', 'mockTestUnitStructure/test/unit', ['lib', 'test']]
                 ]

exports['is correctly constructed'] = function(test) {
    test.ok(findFolder)
    test.ok(findFolder.up)
    test.ok(findFolder.isMatch)
    test.done()
}

exports['findFolder'] = { folderOnly : {}
                        , folderAndSignature : {}
                        }

exports['findFolder'].folderOnly['valid folder return folder'] = function(test) {
    test.equal(DEFAULTFS, findFolder(DEFAULTFS))
    test.done()
}

exports['findFolder'].folderOnly['invalid folder throws'] = function(test) {
    test.throws(function() {
        findFolder(testutil.anyString)
    })
    test.done()
}

exports['findFolder']['missing folder parameter'] = function(test) {
    test.throws(function() {
        findFolder()
    })
    test.done()
}

exports['findFolder'].folderAndSignature['returns folder matching signature'] = testutil.parameterize(FOLDERDATA, paramFindFolder)

function paramFindFolder(test, expected, testFolder, signature) {
    expected = path.join(TESTFOLDERBASE, expected)
    testFolder = path.join(TESTFOLDERBASE, testFolder)
    test.equals(expected, findFolder(testFolder, signature))
    test.done()
}

exports['findFolder'].folderAndSignature['throws when match not found'] = function(test) {
    var signature = [testutil.anyString(), testutil.anyString(), testutil.anyString(), testutil.anyString()]
    test.throws(function() {
        findFolder(DEFAULTFS, signature)
    })
    test.equals(DEFAULTFS, findFolder(DEFAULTFS))
    test.done()
}

exports['findFolder'].folderAndSignature['empty signature returns folder'] = function(test) {
    var signature = []
    test.equals(DEFAULTFS, findFolder(DEFAULTFS, signature))
    test.done()
}

exports['findFolder'].folderAndSignature['invalid relative folder path'] = function(test) {
    var folder = 'mockTestUnitStructure/test/unit'
      , signature = [testutil.anyString()]
    test.throws(function() {
        findFolder(folder, signature)
    })
    test.done()
}

exports['findFolder']['customSearchMethod'] = function(test) {
    var invalidOrigin = testutil.anyString()
      , searchMethod = function(folder, signature) { return DEFAULTFS }
      , signature = [testutil.anyString(), testutil.anyString(), testutil.anyString()]
    test.equal(DEFAULTFS, findFolder(invalidOrigin, signature, searchMethod))
    test.done()
}