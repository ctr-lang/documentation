/**
 * Tests to make sure clearfix class is included in the file
 * @param  {str} fileLoc -> file location
 * @param  {str} file    -> raw file data
 */
const testForClearfix = function (fileLoc, file) {
  const hasCf = file.includes('<div class="cf"></div>');
  //run stylus test
  describe(fileLoc, function () {
    //run/render test
    it('Clearfix class should be present', function () {
      //render styles
      hasCf.should.equal(true);
    });
  });
};


module.exports = testForClearfix;
