# requireWatch

__Description__: The `requireWatch` Function is a wrapper around webpack's `addDependency` method. Similar to `require`, `requireWatch` is used to require `ctr` styles, however, unlike `require` it tells webpack "hey, if this file is changed recompile my results." Through the `requireWatch` Function a project can be setup similar to that of a CSS preprocessor structure.

__Parameters__

+ `requireWatch(<filepath>, {<context>: <default>, <absolute>: false})`
+ `requireWatch([<filepath>, <filepath>, ...], {<context>: <default>, <absolute>: false})`

__Arguments__

+ `<filepath>` <span class="arr-i"></span> `String`
    * The file path location of the file that is to be added as a webpack `dependency`
+ `<context>` <span class="arr-i"></span> `String | webpack default`
    * Alters webpack's lookup context that is set in `webpack.config.js`
    * Something you shouldn't be changing unless you know what you're doing
+ `<absolute>` <span class="arr-i"></span> `Boolean| false`
    * If the `<filepath>` is an absolute path

{!javascript/ctr-loader/_code/require-watch.code.md!}

__Notes__

+ While you _can_  use `require` I highly advice against it
+ If you're using a `ctr` class in your styles, I recommend, you never rely on webpack's load order of `require` and explicitly require the class file via `requireWatch`
+ General tests: [`__tests__/cases/watch`](https://github.com/ctr-lang/ctr-loader/tree/master/__tests__/cases/watch) <span class="arr-i"></span> all tests the directory use `requireWatch`
+ Argument tests: [`__tests__/cases/watch`](https://github.com/ctr-lang/ctr-loader/tree/master/__tests__/cases/watch/option) <span class="arr-i"></span> ie. auxiliary "options"


<div class="cf"></div>
<div class="end"></div>

