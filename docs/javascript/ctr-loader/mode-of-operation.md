# Mode of Operation

The mode of operation for the `ctr-loader` can seem a bit abstracted, but in reality, it's as straightforward as it gets. The loader simply executes the `[filename].ctr.js`, passing two arguments to the exported Function, a global `ctr` instance and `requireWatch`. Upon execution, the `ctr-loader` expects a return of a String which is assumed to be CSS, although, if a String is not returned the return is disregarded. For the sake of demonstration, first let's use the `ctr-loader` without actually using `ctr`.

{!javascript/ctr-loader/_code/mode-of-operation-A.code.md!}

Boom! Like magic we have a `background` of `red`. In the above example, we are simply declaring in `index.js` that we wish to use the CSS styles located in `styles.ctr.js`. That's it; it's truly that simple. Let's now do the same thing using `ctr`. Remember, the `ctr-loader` passes a global `ctr` instance to use as the first argument.

{!javascript/ctr-loader/_code/mode-of-operation-B.code.md!}

Boom! Like magic we have a `background` of `red`, but this time it the CSS style was made using `ctr`. The `ctr` instance that is passed to the `styles.ctr.js` file is a global `ctr` instance initialized in the `ctr-loader`. The reasoning behind this operation is to allow all `ctr` styles to be memoized so you can go Fast And Furious Five fast.

In case you're not familiar with "how" loaders compile in general, the `styles.ctr.js` file is being compiled via node through webpack. What this means is if you needed to debug `styles.ctr.js` you can not just plop a `debugger` statement in a style file and catch the breakpoint in the browser. Rather you must use a node debugging tool like [Visual Studio Code's](https://code.visualstudio.com/) built-in debugger or an external tool. You can check out a list of node debugger tools [here](https://github.com/sindresorhus/awesome-nodejs#debugging--profiling). However, hands down I recommend [iron-node](https://github.com/s-a/iron-node) or [devtool](https://github.com/Jam3/devtool), but I fucking love iron-node, it's one of my most trusted and used tools on my tool belt.

<div class="cf"></div>
<div class="end"></div>

