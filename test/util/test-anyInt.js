var anyInt = requireUnit(module.filename);

exports['makes random integer'] = function(test) {
    var max = 10;
    assertAnyInt(test, max);
    test.done();
}

function assertAnyInt(test, max, min) {
    var num = anyInt(max, min);
    if(min == null)
        min = 0;
    test.ok(num <= max && num >= min);
    return num;
}

exports['no max throws'] = function(test) {
    test.throws(anyInt, Error);
    test.done();
}

exports['min greater than max throws'] = function(test) {
    test.throws(function() {
        anyInt(1, 2);
    }, Error);
    test.done();
}

exports['min equals max returns that value'] = function(test) {
    var expected = anyInt(1000, -1000);
    var actual = anyInt(expected, expected);
    test.equals(expected, actual);
    test.done();
}