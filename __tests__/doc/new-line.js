/**
 * Tests to make sure the comments have a space after them
 * @param  {str} fileLoc -> file location
 * @param  {str} file    -> raw file data
 * @param  {str} yaml    -> raw yaml data
 */
const testNewLine = function (fileLoc, file) {
  const hasNewLine = file.match(/\n$/g) !== null;
  //run stylus test
  describe(fileLoc, function () {
    //run/render test
    it('File should end with new line', function () {
      //render styles
      hasNewLine.should.equal(true);
    });
  });
};

module.exports = testNewLine;
