var includeTests = requireUnit(module.filename);

var DEFAULTFS = './test-assets/includeTestDefaultBehavior';
exports['includeTests when undefined target - is created'] = function(test) {
    var target = includeTests(DEFAULTFS);
    test.ok(target);
    test.done();
}

exports['includeTests when directory is provided - recursively includes tests'] = function(test) {
    var target = {};
    test.equal(target, includeTests(DEFAULTFS, target));
    test.ok(target["test-mocktest.js"] !== null);
    test.done();
}

exports['includeTests when file is provided'] = function(test) {
    var target = includeTests(DEFAULTFS + "/test/test-mocktest.js");
    test.ok(target["test-mocktest.js"] != null);
    test.ok(target['test-mocktest.js']['test2'] != null);
    test.done();
}

exports['includeTests when file is not a test'] = function(test) {
    var target = includeTests(DEFAULTFS + "/test/notatest.js");
    test.ok(target["notatest.js"] === undefined);
    test.done();
}