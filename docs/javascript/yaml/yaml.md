# yaml

__Description__: The `yaml` method alivates many of the pain points involved with having to `require` a YAML file which cannot be done nativley. Essentially the method is a wrapper around `fs` and the YAML parser [js-YAML](https://github.com/nodeca/js-yaml) to read and convert YAML files into Javascript Objects.

__Parameters__

+ `yaml()`
+ `yaml(<filePath>, [<option> | <transformFn>])`
+ `yaml(<filePath>, <option>, <transformFn>)`

__Arguments__

+ `<filePath>` <span class="arr-i"></span> `String | [Strings] | (True | Undefined)`
    * `String`
        - Absolute path: Should work absolutely, no questions asked
        - Relative path: Should work in most V8 environments, uses `Error.prepareStackTrace` to obtain the last Functions caller path which should be the `ctr` instance
    * `[Strings]`
        - An Array of YAML file paths
    * `True | Undefined`<span class="arr-i"></span>argumentless
        - Uses `Error.prepareStackTrace` to obtain the last Functions caller path which should be the `ctr` instance, and then looks for a  YAML file with the same path but with the extension of `yml` or `yaml`
+ `<option>` <span class="arr-i"></span> `Object`
    * `option` <span class="arr-i"></span> `Object`
        - `ctr` specific options can be defined in the root of the `<option>` Object or defined in an Object with the key of `option`
    * `transform | yamlTransform` <span class="arr-i"></span> `Function`
        - Refers to [`setYamlTransform`](../javascript/yaml.md#setyamltransform){: .pjax}, same thing as `setYamlTransform(<data>, {once: true})`
    * `requireWatch` <span class="arr-i"></span> `Function`
        - A [ctr-loader](../javascript/ctr-loader.md){: .pjax} specific option to pass the [`requireWatch`](../javascript/ctr-loader.md#requirewatch){: .pjax} Function that in turn adds the YAML file(s) to webpack’s dependency watch list

__Example__

{!javascript/yaml/_code/yaml.code.md!}

__Notes__

+ Like everything in `ctr`, there is a boat load of tests you can checkout to get a better understanding 
+ Tests: [`__tests__/cases-js/yaml`](https://github.com/ctr-lang/ctr/tree/master/__tests__/cases-js/yaml) <span class="arr-i"></span> all tests use the `yaml` method


<div class="cf"></div>
<div class="end"></div>

