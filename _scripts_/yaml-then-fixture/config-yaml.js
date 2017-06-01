const _     = require('lodash');
const colur = require('colur');

/**
 * Removes prv yaml so we got a fresh sheet of ice
 * @param  {str} file -> raw file string
 * @return {str}      -> raw file string without yaml
 */
const removeYaml = function (file) {
  if (!file.includes('gen:false') && file.includes('data-examples="yaml"')) {
    const yamlRegex = /<div\sdata-size="\d*" data-examples="yaml"><\/div>/gm;
    const yamlInitPos = file.search(yamlRegex),
          yamlEndPos  = file.indexOf('```', yamlInitPos + file.match(yamlRegex)[0].length + 8);
    //remove yaml
    file = file.substr(0, yamlInitPos) + file.substr(yamlEndPos + 5);
  }
  return file;
};

/**
 * Updates the data class and such
 * @param  {str} file -> raw file string
 * @return {str}      -> raw file string with data class
 */
const updateData = function (file) {
  if (!file.includes('data-examples="stylus"')) {
    const divRegex = /<div\sdata-size="\d*"><\/div>/gm;
    let div = file.match(divRegex);
    if (!div) {
      colur(`SCRIPT::yaml-then-fixture:config-yaml.js: Error -> No matching dataExamples -> ${file}`);
      return false;
    }
    div = div[0];
    //slice off the end
    div = div.slice(0, div.indexOf('><\/div>'));
    //add on example
    div += ' data-examples="stylus"><\/div>';
    //and then we replace
    file = file.replace(divRegex, div);
  }
  return file;
};


/**
 * Adds yaml to *.code.md
 * @param {str} file -> raw file string
 * @return {obj}     -> res obj
 */
const addYaml = function (file) {
  //get just stylus
  const stylInitPos = file.indexOf('```styl') + 7,
        stylEndPos  = file.indexOf('```', stylInitPos);
  let styl = file.slice(stylInitPos, stylEndPos);
  const rawStyl = styl;
  //do not gen overide, since not all styl === yaml
  if (file.includes('gen:false')) {
    if (file.indexOf('```yaml') === -1) {
      return {
        file,
        rawYaml: false,
        rawStyl
      };
    }
    const yamlInitPos = file.indexOf('```yaml') + 7,
          yamlEndPos  = file.indexOf('```', yamlInitPos),
          rawYaml     = file.slice(yamlInitPos, yamlEndPos);
    return {
      file,
      rawYaml,
      rawStyl
    };
  }

  //remove ctr
  styl = styl.replace(/ctr\(/g, '');
  styl = styl.replace(/,\s{/g, ':');
  styl = styl.replace(/}\)/g, '');
  //comments
  const rmCommentsRegex = new RegExp(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm);
  styl = styl.replace(rmCommentsRegex, function (val) {
    //replace with yamal comment
    return val.replace('//', '#');
  });
  //remove brackes
  styl = styl.replace(/\s{|}/g, '');
  //remove empty lines
  styl = styl.replace(/^\s*\n/gm, '');
  //remove all single quotes
  let skip = false;
  styl = styl.replace(/'/g, function (char, pos, str) {
    if (skip === true) {
      skip = false;
      return char;
    }
    // #<color> && '[]''
    if (str.charAt(pos + 1) === '#' || str.charAt(pos + 1) === '[') {
      skip = true;
      return char;
    }
    if (str.charAt(pos - 1) !== ']' || str.slice(pos - 7, pos - 1) === '"test"') {
      // skip = str.slice(pos - 7, pos - 1) === '"test"';
      return '';
    }
    return char;
  });
  //stylus lsit to array, fingers crossed
  _.forEach(styl.match(/:.+(?=\n)/g), function (val) {
    const spaces = val.match(/\s/g);
    const string = val.match(/:\s('|")(\w|\s){1,}('|")$/g);
    const singleString = string && string.length === 1;
    if (spaces && spaces.length >= 2 && val.match(/^:/) && !val.match(/\(.*\)/g) && !singleString) {
      const list = val.split(' ');
      list.shift();
      const matchReplace = list.join(' ');
      const listArray = '[' + list.join(', ') + ']';
      styl = styl.replace(matchReplace, listArray);
    }else if (val.includes('#') && !val.startsWith(": '")) {
      const list = val.split(' ');
      list.shift();
      const matchReplace = list.join(' ');
      const stringed = "'" + list.join(' ') + "'";
      styl = styl.replace(matchReplace, stringed);
    }
  });


  //get data attr
  const dataAttr = file.match(/<div\sdata-size="\d*" data-examples="stylus"><\/div>/gm);
  if (!dataAttr) {
    return {
      file: false
    };
  }
  //replace for yaml
  const yamlDataAttr = dataAttr[0].replace('stylus', 'yaml');
  //build yaml
  let yaml = '\n' + yamlDataAttr + '\n';
  yaml += '```yaml\n';
  yaml += styl;
  yaml += '```\n';
  styl = '\n' + styl;

  //add yaml to file
  file = file.substr(0, stylEndPos + 4) + yaml + file.substr(stylEndPos + 4);
  return {
    file: file,
    rawYaml: styl,
    rawStyl
  };
};


/**
 * Manager for this gig, runs through the steps
 * @param  {str} file -> raw file string
 * @return {obj}      -> res obj
 */
const configYaml = function (file) {
  file = removeYaml(file);
  file = updateData(file);
  if (!file) {
    return {
      file: false
    };
  }
  let rawYaml = '';
  let rawStyl = '';
  ({file, rawYaml, rawStyl} = addYaml(file));
  return {
    file,
    rawYaml,
    rawStyl
  };
};


module.exports = configYaml;
