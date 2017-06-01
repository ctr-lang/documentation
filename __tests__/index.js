const _                 = require('lodash');
const glob              = require('glob-all');
const colur             = require('colur');
const should            = require('should');
//code tests
const testFixtureMatch  = require('./code/fixture-match.js');
const testDataSize      = require('./code/data-size.js');
const testForClearfix   = require('./code/clear-fix.js');
const testForDataName   = require('./code/data-name.js');
const testComments      = require('./code/comments.js');
const testStylCompMatch = require('./code/compile-match.js');
//doc tests
const testNewLine       = require('./doc/new-line.js');
const testPjaxLink      = require('./doc/pjax-link.js');
const testHashLink      = require('./doc/proper-hashlink.js');
const testNoteSpace     = require('./doc/proper-notespace.js');
const testJinjaMeta     = require('./doc/jinja-meta.js');
// js tests
const testJsCompMatch   = require('./javascript/compile-match.js');

const {readFile} = require('./test-helpers.js');


//files/test to exclud
const excludeTest = [
  './docs/basic/global-option/_code/default-values.code.md',
  // due to hash key
  './docs/animation/key/_code/hash-key.code.md'
];


/**
 * The init test runner that gets the files, styl, and css
 * @param  {str} file    -> raw file
 * @param  {str} fileLoc -> location of file
 * @return {---}         -> runs tests
 */
const runCodeTest = function (file, fileLoc) {
  //get stylus
  const stylInitPos = file.indexOf('```styl') + 7;
  const stylEndPos  = file.indexOf('```', stylInitPos);
  const styl        = file.slice(stylInitPos, stylEndPos);

  //get yaml
  const hasYaml     = file.indexOf('```yaml') !== -1;
  const yamlInitPos = hasYaml ? file.indexOf('```yaml') + 7 : false;
  const yamlEndPos  = hasYaml ? file.indexOf('```', yamlInitPos) : false;
  const yaml        = hasYaml ? file.slice(yamlInitPos, yamlEndPos) : false;

  //get css
  const cssInitPos = file.indexOf('```css') + 6;
  const cssEndPos  = file.indexOf('```', cssInitPos);
  const css        = file.slice(cssInitPos, cssEndPos);

  //fixture test
  testFixtureMatch(fileLoc, styl, css, yaml);
  //dataSize test
  testDataSize(fileLoc, file);
  //dataname test
  testForDataName(fileLoc, file);
  //clearfix test
  testForClearfix(fileLoc, file);
  //clearfix test
  testComments(fileLoc, file, yaml);
  //compile test
  testStylCompMatch(fileLoc, styl, css, yaml);
};



const runDocTest = function (fileLoc, file) {
  //new line \n test
  testNewLine(fileLoc, file);
  //pjax link
  testPjaxLink(fileLoc, file);
  //hash link
  testHashLink(fileLoc, file);
  //note space
  testNoteSpace(fileLoc, file);
  //jinja meta
  testJinjaMeta(fileLoc, file);
};


/**
 * Doc Tests
 */
_.forEach(glob.sync(['./docs/**/*.md']), function (fileLoc) {
  const file = readFile(fileLoc);
  runDocTest(fileLoc, file);
});


//main caller
//cylce and run tests
_.forEach(glob.sync(['./docs/**/_code/*.code.md', '!./docs/javascript/**']), function (fileLoc) {
  if (!_.includes(excludeTest, fileLoc)) {
    const file = readFile(fileLoc);
    if (!file.includes('test:false')) {
      runCodeTest(file, fileLoc);
    }
  }
});


//javascript tests
_.forEach(glob.sync(['./docs/javascript/**/_code/*.test.js']), function (fileLoc) {
  testJsCompMatch(fileLoc);
});


//signal completion
before(function () {
  colur('START TEST: stylus && yaml && javascript ---> format && match && compile');
});
after(function () {
  colur('END TEST: stylus && yaml  && javascript  ---> format && match && compile', {end: true});
});


