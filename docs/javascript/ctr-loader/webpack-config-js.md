# webpack.config.js

__Description__: The `ctr-loader` needs to be chained with the `style-loader` and the `css-loader` but can also be chained with other loaders such as `postcss-loader` to `autoprefix` styles.

__webpack.config.js__

{!javascript/ctr-loader/_code/webpack-config-js.code.md!}

__Notes__

+ Test Regex accommodates the following `ctr` file extensions
    - `[filename].ctr.js`, `[filename].ctr.yml`, `[filename].ctr.yaml`
    - This is my preferred naming schema due to its declarative nature, but by no means do you have to use this schema
+ Since the `ctr-loader` is chained with the `css-loader` all `css-loader` options are applied so reference its [documentation](https://github.com/webpack-contrib/css-loader/blob/master/README.md) to learn how to use `url()`, modules, etc.
+ This loader setup by all accounts is pretty standard; there should be no surprises here

<div class="cf"></div>
<div class="end"></div>

