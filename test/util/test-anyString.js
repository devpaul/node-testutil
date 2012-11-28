var anyString = requireUnit(__filename)

exports['generates string of random length'] = function(test) {
    var str = anyString()
    test.ok(str)
    test.ok(str.length >= 8)
    test.done()
}

exports['generates string of specified length'] = function(test) {
    var str = anyString(12)
    test.ok(str)
    test.equals(12, str.length)
    test.done()
}