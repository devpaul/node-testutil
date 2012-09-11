var path = require('path');
var testutil = require('../lib/index.js');
global.testutil = testutil;
testutil.settings.verbose = true;
module.exports = testutil.includeTestFolder(path.dirname(module.filename));