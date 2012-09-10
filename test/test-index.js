var unit = testutil.requireUnit(module.filename);

exports['is module correctly constructed'] = function(test) {
    test.ok(unit);
    test.ok(unit.mocks);
    test.ok(unit.mocks.MockExpressResponse);
    test.ok(unit.mocks.MockExpressServer);
    test.ok(unit.settings);
    test.strictEqual(unit.settings.verbose, false);
    test.ok(unit.settings.testFileMatch);
    test.ok(unit.settings.rootTestFolder);
    test.ok(unit.settings.rootSrcFolder);
    test.ok(unit.recursivelyMixinTests);
    test.ok(unit.mixinTest);
    test.ok(unit.isTestFile);
    test.ok(unit.mapToSourceDir);
    test.ok(unit.mapToSourceFile);
    test.ok(unit.requireUnit);
    test.ok(unit.parameterize);
    test.done();
}