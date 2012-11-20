var path = require('path')

function searchUp(folder, signature) {
    for(; folder != path.join(folder, ".."); folder = path.join(folder, "..")) {
        if(hasMatchingFolderSignature(folder, signature))
            return folder
    }
}

function hasMatchingFolderSignature(folder, signature) {
    var i
    for (i = signature.length - 1; i >= 0; i--)
        if (!path.existsSync(path.join(folder, signature[i])))
            return false
    return true
}

function findFolder(folder, signature, searchMethod) {
    searchMethod = searchMethod || searchUp
    if(signature)
        folder = searchMethod(folder, signature)

    if(!folder || !path.existsSync(folder))
        throw new Error("Basepath not found or does not exist: " + folder)

    console.log("using base path: " + folder)
    return folder
}

findFolder.up = searchUp
findFolder.isMatch = hasMatchingFolderSignature
module.exports = findFolder
