const fs = require('fs');

const normalizeContent = function (str) {
  return str.replace(/\r/g, '').trim();
};

const readFile = function (path) {
  return fs.readFileSync(path, 'utf-8');
};

/**
 * Cleans that dirty css
 * @param  {str} str -> css
 * @return {str}     -> cleaned
 */
const cleanCSS = function (str) {
  const rmCommentsRegex = new RegExp(/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gi);
  const rmEmptyLinesRegex = new RegExp(/(^[ \t]*\n)/gm);

  str = str.replace(rmCommentsRegex, '');
  str = str.replace(rmEmptyLinesRegex, '');
  return str;
};


module.exports = {
  normalizeContent,
  readFile,
  cleanCSS
};
