var testutil = require('../lib/index.js');
global.testutil = testutil;
testutil.recursivelyMixinTests(module.filename, exports);