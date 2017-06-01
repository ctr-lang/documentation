# writeFile

__Description__: The `writeFile` method is essentially a wrapper around `fs.writeFileSync` with other goodies packaged in to streamline the process of writing out the rendered results.

__Parameters__

+ `writeFile()`
+ `writeFile(<option>)`
+ `writeFile(<filePath>, <option>)`

__Arguments__

+ `argumentless`
    * If no `filePath` is specified a path is auto-generated which should  work in most V8 environments
    * Under the hood, it uses `Error.prepareStackTrace` to obtain the last functions caller path which should be the `ctr` instance
    * `[caller-file-path].js` <span class="arr-i"></span> `[caller-file-path].css`
+ `<filePath>` <span class="arr-i"></span> `String`
    * The absolute path for `fs` to write the style results to, including the file extension of `.css`
+ `<option>` <span class="arr-i"></span> `Object`
    - `<option>.callback` <span class="arr-i"></span> `Function | false`
        + Callback is invoked right after the file is written with a single argument of the file path
        + Callback function is binded to the `ctr` instance
    - `<option>.comment` <span class="arr-i"></span> `Boolean | String | true`
        + If `false`, omits writing a comment completely
        + If `String`, replaces the default comment with the one specified
    - `<option>.commentFile` <span class="arr-i"></span> `Boolean | String | true`
        + Sets the `CTR LOC` commnet for the CSS file
        + If `false`, omits the file path comment generation.
        + If `String`, replaces file location with the one specified
    - `<option>.dynamicPath` <span class="arr-i"></span> `Boolean | false`
        + Returns the path with the inital `/` and `.css` removed so its a dynamic path to appease webpack
        + Example usage: `require('/' + [path] + '.css')`
    - `<option>.fileName` <span class="arr-i"></span> `String | false`
        + Uses the auto-generated path and replaces the file name with the specified `fileName`.
        + `[caller-file-path]/[fileName].js` <span class="arr-i"></span> `[caller-file-path]/[specified-fileName].css`
    - `<option>.filePath` <span class="arr-i"></span> `String | false`
        + Same as `<filePath>` argument just in the option Object
    - `<option>.returnPath` <span class="arr-i"></span> `Boolean | false`
        + Instead of returning the `ctr` instance it returns the path that the file was written to

__Example__

{!javascript/methods/_code/write-file-A.code.md!}
{!javascript/methods/_code/write-file-B.code.md!}
{!javascript/methods/_code/write-file-C.code.md!}

__Notes__

+ If you wish or need to use this method I recommend you check out the tests for further examples
+ Tests: [`/__tests__/cases-js/public-methods/write-file`](https://github.com/ctr-lang/ctr/tree/master/__tests__/cases-js/public-methods/write-file)


<div class="cf"></div>
<div class="end-last"></div>

