var findFolder = requireUnit(__filename)
  , path = require('path')
  , DEFAULTFS = path.resolve('./test-assets/includeTestDefaultBehavior')

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

exports['findFolder'].folderAndSignature['returns folder matching signature'] = function(test) {
    var origin = path.join(DEFAULTFS, "src/folder/mocktest.js")
      , signature = ['src', 'test']
      , result
    test.equals(DEFAULTFS, findFolder(origin, signature))
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

exports['findFolder']['customSearchMethod'] = function(test) {
    var invalidOrigin = testutil.anyString()
      , searchMethod = function(folder, signature) { return DEFAULTFS }
      , signature = [testutil.anyString(), testutil.anyString(), testutil.anyString()]
    test.equal(DEFAULTFS, findFolder(invalidOrigin, signature, searchMethod))
    test.done()
}