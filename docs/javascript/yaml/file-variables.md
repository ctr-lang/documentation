# File Variables

__Description__: Currently, [js-yaml](https://github.com/nodeca/js-yaml) does not support node anchors aka variables. Nevertheless, a variable Object can be defined through an Object with the key of `$$`. The variables defined in this Object are similar to variables set through the [`setVariable`](../javascript/methods.md#setvariable){: .pjax} method. However, unlike [global variables](../variable/general.md#global){: .pjax}, the set YAML variables are only available to the YAML styles defined in the file. Also, global YAML variables can work hand-in-hand with [local variables](../variable/general.md#local){: .pjax} in each YAML style.

{!javascript/yaml/_code/file-variables.code.md!}

__Notes__

+ Variable lookup is performed through lodash's [`_.get`](https://lodash.com/docs/4.17.2#get) Function using dot notation: `$<path>.<to>.<var>$`
+ If a variable is not found `ctr` will throw you a warning and the value will be `$var-not-found$`
+ Variable priority: `local > YAML variables > setVariable`
+ Tests: [`__tests__/cases-js/yaml/variable`](https://github.com/ctr-lang/ctr/tree/master/__tests__/cases-js/yaml/variable)

<div class="cf"></div>
<div class="end"></div>

