const fs    = require('fs-extra');
const Rsync = require('rsync');
const colur = require('colur');

/**
 * Updates/syncs changes in documentation to the docs.ctr-lang site dir
 */
const docs     = './docs/';
const external = './docs-external/docs/';

const SOURCE = process.env.SOURCE === 'docs' ? docs : external;
const DEST   = process.env.SOURCE === 'docs' ? external : docs;


const init = function () {
  colur('SCRIPT:update -> START');
  // Build the command
  const rsync = new Rsync()
        .exclude('_super-secret-subscription.md')
        // dry run -> n
        // .flags(['n', 'r', 'u', 'v', 't', '--progress', '--delete'])
        .flags(['r', 'u', 'v', 't', '--progress', '--delete'])
        .source(SOURCE)
        .destination(DEST);


  // execute with stream callbacks
  const rsyncPid = rsync.execute(
    function(error, code, cmd) {
      if (error) {
        colur(`SCRIPT:update -> Error: ${error}`, {error: true});
      }
      // we're done
      colur('SCRIPT:update -> COMPLETE', {end: true});
    },
    function(data) {
      // do things like parse progress
      if (data.toString) {
        console.log(data.toString());
      }
    }, function(data) {
      // do things like parse error output
      colur(`SCRIPT:update -> Error: ${data}`, {error: true});
    }
  );


  const quitting = function() {
    if (rsyncPid) {
      rsyncPid.kill();
    }
    process.exit();
  };
  // run signal handler on CTRL-C
  process.on('SIGINT', quitting);
  // run signal handler on SIGTERM
  process.on('SIGTERM', quitting);
  // run signal handler when main process exits
  process.on('exit', quitting);
};

if (fs.existsSync(SOURCE) && fs.existsSync(DEST)) {
  init();
}else {
  colur('SCRIPT:update -> Error: files dir not found', {error: true});
}
