const _ = require('lodash');

/**
 * Tests to make sure clearfix class is included in the file
 * @param  {str} fileLoc -> file location
 * @param  {str} file    -> raw file data
 */
const testForDataName = function (fileLoc, file) {
  let dataEx = file.match(/(data-example.{1,}"\s)|(data-example.{1,}>)/g) || 'not-found';
  dataEx = _.isArray(dataEx) ? dataEx[0] : dataEx;
  dataEx = dataEx.replace(/data-example=/, '');
  dataEx = dataEx.replace(/"|>/g, '');
  dataEx = dataEx.replace(/\s/g, '');
  const nameChecksOut = fileLoc.includes(dataEx);
  //run stylus test
  describe(fileLoc, function () {
    //run/render test
    it('Data-example should match file name', function () {
      nameChecksOut.should.equal(true);
    });
  });
};


module.exports = testForDataName;
