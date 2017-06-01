# Global
<div class="te-verified"></div>

__Description__: Global variables can be defined through a [`ctrSetVariable`](../helpers/set.md#ctrsetvariable){: .pjax} invocation or in the [`.ctrrc.yml`](../helpers/dot-ctrrc.md){: .pjax} file. Variables are declared in key-value pair fashion and their value can be a String, Object, List, or a Literal. To reference a global variable, the absolute variable path is specified as a String wrapped in dollar signs as such: `'$<path>.<to>.<varible>$'`.

{!variable/general/_code/global.code.md!}
{!variable/general/_code/global.fixture.md!}

__Notes__

+ Local variables always supersede global variables
+ Global variables share a single immutable Map and new values are added through [mergeDeep](http://facebook.github.io/immutable-js/docs/#/Map/mergeDeep)
+ Like all global variables in any language, they carry inherent baggage. Although, if you accidentally try to overwrite a variable it will throw you a warning message which you can override if you wish
+ The yaml syntax is `ctr:::setVar:` and it works just like Stylus `ctrSetVar`iables are declared in key-value pair fashion and their value can be a String, Object, List, or a Literal. To reference a global variable the absolute variable path is specified as a String wrapped in dollar signs as such: `'$<path>.<to>.<varible>$'`.

<div class="cf"></div>
<div class="end"></div>

