const _ = require('lodash');

/**
 * Tests to make sure proper internal hash link
 * @param  {str} fileLoc -> file location
 * @param  {str} file    -> raw file data
 */
const testPjaxLink = function (fileLoc, file) {
  let badHashLink = file.match(/\.\.(.*?)\/#/g);
  badHashLink     = _.isNull(badHashLink) ? [] : badHashLink;

  //run stylus test
  describe(fileLoc, function () {
    //run/render test
    it('Should have proper hash links', function () {
      (badHashLink.length).should.equal(0);
    });
  });
};

module.exports = testPjaxLink;
