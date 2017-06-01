const _      = require('lodash');
const fs     = require('fs');
const path   = require('path');
const should = require('should');
const {normalizeContent, readFile} = require('../test-helpers.js');

/**
 * Test to make sure Styl + ctr compiles to correct css
 * @param  {str} fileLoc -> location of file in question
 */
const testCompileMatch = function (fileLoc) {
  //config css res file is present
  const cssFile = fileLoc.replace('.js', '.css');
  const cssExp = fs.existsSync(cssFile) ? readFile(cssFile) : false;

  describe(fileLoc, function () {
    it('Javascript should compile to expected result', function () {
      //dynamically require test
      let {exp, res} = require(path.join('./../../', fileLoc.slice(1)));
      //check and reasing if cssExp
      exp = cssExp && !_.isFunction(exp) ? cssExp : exp;
      //if no result assume expected is a assertion funk
      if (_.isFunction(exp)) {
        exp(should);
      }else {
        normalizeContent(exp).trim().should.equal(normalizeContent(res).trim());
      }
    });
  });

};


module.exports = testCompileMatch;
