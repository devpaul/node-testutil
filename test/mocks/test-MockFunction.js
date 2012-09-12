var MockFunction = requireUnit(module.filename);

exports['is correctly constructed'] = function(test) {
    test.ok(MockFunction);
    var expectedData = testutil.anyString;
    var func = MockFunction(expectedData);
    test.ok(func);
    test.ok(func instanceof Function);
    test.ok(func.argList);
    test.equals(0, func.argList.length);
    test.ok(func.setReturnData);
    test.ok(func.getReturnData);
    test.done();
}

exports['new function each construction'] = function(test) {
    test.ok(MockFunction() != MockFunction());
    test.done();
}

exports['setting return data on one function doesnt affect another'] = function(test) {
    var func1 = MockFunction(testutil.anyString());
    var func2 = MockFunction(testutil.anyString());
    test.ok(func1.getReturnData() != func2.getReturnData());
    test.done();
}

exports['mock function returns data when called'] = function(test) {
    var expected = testutil.anyString();
    var func = MockFunction(expected);
    test.equals(expected, func());
    test.done();
}

exports['call function stores arguments when called'] = function(test) {
    var func = MockFunction();
    var data = func.argList;
    test.equals(0, data.length);
    func(1, 2, 3);
    test.equals(1, data.length);
    test.equals(1, data[0][0]);
    test.equals(2, data[0][1]);
    test.equals(3, data[0][2]);
    test.done();
}

exports['setReturnData sets return data'] = function(test) {
    var func = MockFunction();
    var expected = testutil.anyString();
    func.setReturnData(expected);
    test.equals(expected, func());
    test.done();
}

exports['getReturnData returns return data'] = function(test) {
    var expected = testutil.anyString();
    var func = MockFunction(expected);
    test.equals(expected, func.getReturnData());
    test.done();
}