const _ = require('lodash');

/**
 * Tests to make sure the comments have a space after them
 * @param  {str} fileLoc -> file location
 * @param  {str} file    -> raw file data
 * @param  {str} yaml    -> raw yaml data
 */
const testComments = function (fileLoc, file, yaml) {
  let wrongStylComment = file.match(/\/\/(\w)/g);
  wrongStylComment = wrongStylComment === null ? [] : wrongStylComment;

  yaml = _.isString(yaml) ? yaml : '';
  let wrongYamlComment = yaml.match(/#\w/g);
  wrongYamlComment = wrongYamlComment === null ? [] : wrongYamlComment;
  wrongYamlComment = file.includes('yaml-comment:false') ? [] : wrongYamlComment;
  wrongYamlComment = _.reduce(wrongYamlComment, function (prv, val) {
    const index = yaml.indexOf(val);
    const prvChar = yaml.charAt(index - 1);
    if (prvChar !== "'" && prvChar !== "(" && prvChar !== "-") {
      prv.push(val);
    }
    return prv;
  }, []);

  //run stylus test
  describe(fileLoc, function () {
    //run/render test
    it('Comments should have space', function () {
      //render styles
      wrongStylComment.should.deepEqual([]);
      wrongYamlComment.should.deepEqual([]);
    });
  });
};

module.exports = testComments;
