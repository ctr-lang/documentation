const path   = require('path');
const should = require('should');
const stylus = require(path.join(process.cwd(), '/ctr-lib/stylus.js'));
const CTR    = require(path.join(process.cwd(), '/ctr-lib/src/lib/ctr.js'));

const ctrJS   = CTR.js;
const ctrStyl = CTR.stylus;

const {normalizeContent, cleanCSS} = require('../test-helpers.js');


/**
 * Test to make sure Styl + ctr compiles to correct css
 * @param  {str} fileLoc -> location of file in question
 * @param  {str} styl    -> raw Styl code of code.md
 * @param  {str} css     -> raw CSS code of code.md
 * @return {---}         -> Thumbs up or down
 */
const testCompileMatch = function (fileLoc, styl, css, yaml) {
  //normilize and clean
  styl = normalizeContent(styl);
  css  = normalizeContent(cleanCSS(css));

  //init stylus compile
  const style = stylus(styl).use(ctrStyl());

  //run stylus test
  describe(fileLoc, function () {
    //run/render test
    it('Stylus should compile to expected result', function () {
      //render styles
      style.render(function (err, actual) {
        if (err) {
          throw err;
        }
        should.equal(actual.trim(), css.trim());
        //resets, for a new sheet of ice
        stylus('ctrReset()').use(CTR.stylus()).render();
      });
    });
  });

  //run yaml test
  if (yaml) {
    yaml = normalizeContent(yaml);
    describe(fileLoc, function () {
      //run/render test
      it('YAML should compile to expected result', function () {
        //render styles
        const ctr = new ctrJS();
        //parse string to obj
        const parsedYaml = ctr._parseYaml(yaml, true);
        //check for vars
        if (parsedYaml.$var$) {
          ctr.setVar(parsedYaml.$var$);
          delete parsedYaml.$var$;
        }else if (parsedYaml.$$) {
          ctr.setVar(parsedYaml.$$);
          delete parsedYaml.$$;
        }
        //check for option
        if (parsedYaml['$ctr-option']) {
          ctr.setOption(parsedYaml['$ctr-option']);
          delete parsedYaml['$ctr-option'];
        }else if (parsedYaml.ctrOption) {
          ctr.setOption(parsedYaml.ctrOption);
          delete parsedYaml.ctrOption;
        }
        //create
        ctr.create(parsedYaml);
        should.equal(ctr.getRes().trim(), css.trim());
      });
    });
  }

};


module.exports = testCompileMatch;
