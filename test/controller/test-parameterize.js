var parameterize = requireUnit(module.filename);

exports['creates tests equal to number of data items'] = function(test) {
    function createItems(length) {
        var data = [];
        for(var i = 0; i < length; i++)
            data.push([testutil.anyString()]);
        return data;
    }

    function assertNaming(length, suite) {
        for(var i = length - 1; i >= 0; i--) {
            var key = "test " + i;
            var func = suite[key];
            test.ok(func, "does not exist for " + key + " " + i + "/" + length + " func: " + func);
            test.ok(func instanceof Function);
        }
    }

    var length = testutil.anyInt(100, 10);
    var data = createItems(length);
    test.equals(length, data.length);
    var suite = parameterize(data, function(test, item) {
        return item;
    });

    test.ok(length, suite.length);
    assertNaming(length, suite);
    test.done();
}

var DATA = [
    [1],
    [2],
    [3]
];
var expectedCntForFirst = 0;
var expectedCntForSecond = 0;
exports['can use same data set twice'] = {
    "first pass" : parameterize(DATA, function(test, data) {
        expectedCntForFirst++;
        test.equal(expectedCntForFirst, data);
        test.done();
    }),
    "second pass" : parameterize(DATA, function(test, data) {
        expectedCntForSecond++;
        test.equal(expectedCntForSecond, data);
        test.done();
    })
}

