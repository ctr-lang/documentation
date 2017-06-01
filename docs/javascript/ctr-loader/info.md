# Info

The `ctr-loader` turns up the `ctr` volume to eleven. I'm going to assume right off the bat you're familiar with [Webpack](https://webpack.github.io/) and the concept of loaders within its context. If not, I recommend you first read up on Webpack because trying to jury-rig webpack is a recipe for disaster. Also, I know I'm beating a dead horse, but `ctr` is not a run-time CSS in JS solution thus the reason for the `ctr-loader`.

The `ctr-loader` "_should_ " fit seamlessly into any CSS pipeline as a complete or progressive replacement. The loader packages up the entirety of `ctr` along with the Javascript API and delivers it to you with a bow on top. Albeit I will warn you from the outright the `ctr-loader` will definitely increase the complexity of your pipeline quite a bit depending on your use case.

At this stage of the game, I have yet to give the `ctr-loader` a real go out in the field. My current experience with the loader is limited to writing the tests to validate its mechanics. This means you're on your own for best practices like the American frontier, so God speed. Regardless of your findings, good or bad, I encourage you to share them.

Outside of the basic setup and concepts I've created a plethora of tests you can scope out in the GitHub [`ctr-loader`](https://github.com/ctr-lang/ctr-loader) repository that test, experiment, and demonstrate various workflows and integrations.

<div class="cf"></div>
<div class="end"></div>

