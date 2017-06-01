const _ = require('lodash');

/**
 * Tests to make sure pjax is linked internally
 * @param  {str} fileLoc -> file location
 * @param  {str} file    -> raw file data
 */
const testPjaxLink = function (fileLoc, file) {
  let linkMatches = file.match(/\.\.(.*?)\.md/g);
  let pjaxMatch   = file.match(/{: \.pjax}/g);
  pjaxMatch       = _.isNull(pjaxMatch) ? [] : pjaxMatch;
  linkMatches     = _.isNull(linkMatches) ? [] : linkMatches;

  //run stylus test
  describe(fileLoc, function () {
    //run/render test
    it('If there is an internal link make sure it has pjax', function () {
      (linkMatches.length).should.equal(pjaxMatch.length);
    });
  });
};

module.exports = testPjaxLink;
