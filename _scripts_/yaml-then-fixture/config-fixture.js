const colur = require('colur');

/**
 * Gets the CSS data
 * @param  {str} file -> raw file string
 * @return {str}      -> raw CSS string
 */
const getCSS = function (file) {
  const cssInitPos = file.indexOf('```css') + 6,
        cssEndPos  = file.indexOf('```', cssInitPos),
        css        = file.slice(cssInitPos, cssEndPos);
  return css;
};

/**
 * Gens the fixture file
 * @param  {str} file    -> raw file string
 * @param  {str} rawStyl -> raw styl string
 * @param  {str} rawYaml -> raw yaml string
 * @return {str}         -> fixture string for fs
 */
const configFixture = function (file, rawStyl, rawYaml) {
  const dataExamples = file.match(/data-example=".*"/gm);
  if (!dataExamples) {
    colur(`SCRIPT::yaml-then-fixture:config-fixture.js: Error -> No matching dataExamples -> ${file}`);
    return false;
  }
  //warning
  let fixture = '<!-- Do Not Edit Directly -> Generated From *.code.md -->\n\n';
  //class
  fixture += '<div class="codemirror-fixture" ' + dataExamples[0] + '></div>\n\n';
  //stylus
  fixture += '<!-- stylus -->\n';
  fixture += '```fixture' + rawStyl + '```' + '\n\n';
  //css
  const rawCSS = getCSS(file);
  fixture += '<!-- css -->\n';
  fixture += '```fixture' + rawCSS + '```' + '\n\n';
  //yaml
  if (rawYaml) {
    fixture += '<!-- yaml -->\n';
    fixture += '```fixture' + rawYaml + '```' + '\n\n';
  }
  return fixture;
};


module.exports = configFixture;
