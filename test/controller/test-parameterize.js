var parameterize = requireUnit(module.filename)

exports['creates tests equal to number of data items'] = function(test) {
    var length = testutil.anyInt(100, 10)
      , data = createItems(length)
      , suite
    test.equals(length, data.length)
    suite = parameterize(data, function(test, item) { return item })

    test.ok(length, suite.length)
    assertNaming(length, suite)
    test.done()

    function createItems(length) {
         var data = []
         for(var i = 0; i < length; i++)
             data.push([testutil.anyString()])
         return data
     }

     function assertNaming(length, suite) {
         var key, func, i
         for(i = length - 1; i >= 0; i--) {
             key = "test " + i
             func = suite[key]
             test.ok(func, "does not exist for " + key + " " + i + "/" + length + " func: " + func)
             test.ok(func instanceof Function)
         }
     }
}

var DATA = [ [1]
           , [2]
           , [3]
           ]
  , expectedCntForFirst = 0
  , expectedCntForSecond = 0

exports['can use same data set twice'] = {
    "first pass" : parameterize(DATA, function(test, data) {
        expectedCntForFirst++
        test.equal(expectedCntForFirst, data)
        test.done()
    }),

    "second pass" : parameterize(DATA, function(test, data) {
        expectedCntForSecond++
        test.equal(expectedCntForSecond, data)
        test.done()
    })
}

