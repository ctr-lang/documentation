# Loader Options

__Description__: Technically you should not need to use these options because they smell pretty bad.

__Arguments__

+ `<context>` <span class="arr-i"></span> `String | webpack default`
    * Alters webpack's lookup context that is set in `webpack.config.js`
    * Something you should be changing unless you know what you're doing
+ `<newInstance>` <span class="arr-i"></span> `Boolean | false`
    * Rather than using a single global `ctr` instance the loader will pass a new instance to every style, as a result, `ctr` styles will not be memoized
+ `<warning>` <span class="arr-i"></span> `Boolean | true`
    * Display loader warning messages

{!javascript/ctr-loader/_code/loader-options.code.md!}

<div class="cf"></div>
<div class="end-last"></div>

