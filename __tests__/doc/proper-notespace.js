/**
 * Tests for space after notes
 * @param  {str} fileLoc -> file location
 * @param  {str} file    -> raw file data
 */
const testNoteSpace = function (fileLoc, file) {
  if (file.includes('notes')) {
    let hasProperSpace = file.match(/__Notes__\n\n/g);
    hasProperSpace = !hasProperSpace ? 0 : hasProperSpace.length;
    let numberOfNotes  = file.match(/__Notes__/gi);
    numberOfNotes = !numberOfNotes ? 0 : numberOfNotes.length;

    //run stylus test
    describe(fileLoc, function () {
      //run/render test
      it('Should proper notes space', function () {
        (hasProperSpace).should.equal(numberOfNotes);
      });
    });
  }
};

module.exports = testNoteSpace;
