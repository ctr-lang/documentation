const {readFile} = require('../test-helpers.js');

/**
 * Test to make sure the code.md code matches fixture.md
 * @param  {str} fileLoc -> location of file in question
 * @param  {str} styl    -> raw Styl code of code.md
 * @param  {str} css     -> raw CSS code of code.md
 * @return {---}         -> Thumbs up or down
 */
const testFixtureMatch = function (fileLoc, styl, css, yaml) {
  const fixturePath = fileLoc.replace('code.md', 'fixture.md');
  const fixture = readFile(fixturePath);

  //Styl test
  describe(fileLoc, function () {
    //run/render test
    it('Styl code should match Styl fixture', function () {
      //render styles
      (fixture.indexOf(styl)).should.not.be.exactly(-1);
    });
  });

  //CSS test
  describe(fileLoc, function () {
    //run/render test
    it('CSS code should match CSS fixture', function () {
      //render styles
      (fixture.indexOf(css)).should.not.be.exactly(-1);
    });
  });

  //yaml test
  if (yaml) {
    describe(fileLoc, function () {
      //run/render test
      it('YAML code should match YAML fixture', function () {
        //render styles
        (fixture.indexOf(yaml)).should.not.be.exactly(-1);
      });
    });
  }
};

module.exports = testFixtureMatch;
