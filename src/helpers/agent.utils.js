// ==========================================================
// This is used with PhantomJS with does not support ES6 or the standard built-in node modules
// -------------------------------------------------------
var logger = require('./../classes/logger.class.js'); 

module.exports = {
    logger: logger,
    getUnix: function() {
        return Math.round(+new Date()/1000);
    }
};