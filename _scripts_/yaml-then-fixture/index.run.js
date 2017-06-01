const _          = require('lodash');
const fs         = require('fs-extra');
const glob       = require('glob-all');
const colur      = require('colur');
const configYaml = require('./config-yaml.js');
const configFix  = require('./config-fixture.js');

/*
Helpers
 */
const normalizeContent = function (str) {
  return str.replace(/\r/g, '').trim();
};
const readFile = function (path) {
  return normalizeContent(fs.readFileSync(path, 'utf-8'));
};
const fileExists = function (filePath) {
  try {
    return fs.statSync(filePath).isFile();
  }catch (err) {
    return false;
  }
};


/**
 * Gens the fixture file
 * @param  {str} options.fileLoc -> file loc
 * @param  {str} options.file    -> raw file
 * @param  {str} options.rawStyl -> raw styl
 * @param  {str} options.rawYaml -> raw yaml
 * @return {bln}                 -> sucess || fail
 */
const genFixture = function ({fileLoc, file, rawStyl, rawYaml}) {
  //fixture data
  if (fileExists(fileLoc.replace('code.md', 'fixture.md'))) {
    const fixture = configFix(file, rawStyl, rawYaml);
    if (fixture) {
      //write *.fixture.md
      fs.writeFileSync(fileLoc.replace('code.md', 'fixture.md'), fixture);
      return true;
    }
  }
};


/**
 * Gen of yaml
 * @param  {str} fileLoc -> file location
 * @return {---}         -> obj or res || false error
 */
const genYaml = function (file) {
  let rawStyl = '';
  let rawYaml = '';
  ({file, rawStyl, rawYaml} = configYaml(file));
  if (file) {
    file += '\n';
    return {
      file,
      rawStyl,
      rawYaml
    };
  }
  return false;
};


/**
 * Handles the running and reporting of yaml + fixture gen
 * @param  {arr} fileArr -> file glob array
 * @return {---}         -> yaml + fixtures hopefully
 */
const run = function (fileArr) {
  const fileDir = fileArr.pop();
  //log start
  colur(`SCRIPT::yaml-then-fixture:index.run.js: START -> gen of YAML and fixtures for: ${fileDir}`);
  //for errors
  const errors = [];
  //grab glob
  const fileGlob = glob.sync([fileDir]);
  //loop glob, build yaml, then fixture
  _.forEach(fileGlob, function (fileLoc) {
    const rawFile = readFile(fileLoc);
    //check file omit
    if (!rawFile.includes('omit:true')) {
      const {file, rawStyl, rawYaml} = genYaml(rawFile);
      if (file) {
        //write *.code.md
        fs.writeFileSync(fileLoc, file);
        //only gen fixture if css present
        if (file.includes('```css') && !file.includes('fix:false')) {
          const fixture = genFixture({fileLoc, file, rawStyl, rawYaml});
          if (!fixture) {
            const fixErr = `SCRIPT::yaml-then-fixture:index.run.js: Error -> generating fixture for: ${fileLoc}`;
            colur(fixErr, {error: true});
            errors.push(fixErr);
          }
        }
      }else {
        const yamlErr = `SCRIPT::yaml-then-fixture:index.run.js: Error -> generating YAML for: ${fileLoc}`;
        colur(yamlErr, {error: true});
        errors.push(yamlErr);
      }
    }
  });

  //cylce error is any
  _.forEach(errors, function (err) {
    err = `SCRIPT::yaml-then-fixture:index.run.js: ERROR -> ${err}`;
    colur(err, {error: true});
  });
  colur(`SCRIPT::yaml-then-fixture:index.run.js: END -> gen of YAML and fixtures for: ${fileDir}`, {end: true});
  //if more test run them but give some breathing room
  if (fileArr.length) {
    setTimeout(function () {
      run(fileArr);
    }, errors.length ? 5000 : 500);
  }
};


/*
Glob to be
 */
const runLocs = [
  './docs/start-here/**/_code/*.code.md',
  './docs/animation/**/_code/*.code.md',
  './docs/attribute/**/_code/*.code.md',
  './docs/basic/**/_code/*.code.md',
  './docs/component/**/_code/*.code.md',
  './docs/class/**/_code/*.code.md',
  './docs/element/**/_code/*.code.md',
  './docs/grid/**/_code/*.code.md',
  './docs/helpers/**/_code/*.code.md',
  './docs/variable/**/_code/*.code.md',
  './docs/media/**/_code/*.code.md',
  './docs/merge/**/_code/*.code.md',
  './docs/non/**/_code/*.code.md',
  './docs/state/**/_code/*.code.md',
  './docs/transition/**/_code/*.code.md'
];

/**
 *
 */
run(runLocs);

