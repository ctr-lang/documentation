# Initialization

__Description__: The `ctr` Javascript API is a simple ECMAScript 2015 [class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) exported under the `js` identifier. Accordingly, a `ctr` instance must be initialized with the [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) operator. During initialization, a global option Object can be passed to the new `ctr` instance to set initial options.

__Example__

{!javascript/methods/_code/initialization.code.md!}

__Notes__

+ For the time being, `ctr` is dependent on Stylus for syntactical structure, as such `ctr` is a synchronous operation
+ As I mention previously, since `ctr` is not run-time, you must use a preprocessing step/hook like the [ctr-loader](../javascript/ctr-loader.md){: .pjax}
+ Both YAML methods [`yaml`](../javascript/yaml.md#yaml-method){: .pjax} and [`setYamlTransform`](../javascript/yaml.md#setyamltransform){: .pjax} are located in the [YAML tab](../javascript/yaml.md){: .pjax}
+ Any options passed to a new `ctr` instance will be merged with [`.ctrrc.yml`](../helpers/dot-ctrrc.md){: .pjax}
+ For the sake of brevity I do not include the dance of initialization, i.e., `const ctr = new CTR();` in the rest of the these examples

<div class="end"></div>

