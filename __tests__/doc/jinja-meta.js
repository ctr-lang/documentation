/**
 * Tests to make sure the proper jinja variables for the title and edit page ref
 * @param  {str}  fileLoc -> Location of file
 * @param  {str}  file    -> contents of file
 */
const hasMeta = function (fileLoc, file) {
  if (fileLoc.includes('_index')) {
    //run stylus test
    describe(fileLoc, function () {
      //run/render test
      it('_index.md should have allz the jinja meta variables', function () {
        //render styles
        file.includes('Parent:').should.be.true();
        file.includes('URL:').should.be.true();
      });
    });
  }
};

module.exports = hasMeta;
