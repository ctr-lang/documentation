const _ = require('lodash');

/**
 * Test to make sure all data-size attributes match eachother
 * @param  {str} fileLoc -> file location
 * @param  {str} file    -> raw file data
 */
const testDataSize = function (fileLoc, file) {
  let match = null;
  _.forEach(file.match(/data-size="\d*"/g), function (val) {
    match = match ? match : val;
    //run stylus test
    describe(fileLoc, function () {
      //run/render test
      it('All data-size attributes should match', function () {
        //render styles
        val.should.equal(match);
      });
    });
  });
};

module.exports = testDataSize;
