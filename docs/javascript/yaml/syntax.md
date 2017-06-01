# Syntax

__Description__: The `ctr` parsing process of YAML is dead simple. A YAML file is a composition of Objects and `ctr` phrases each Object as a separate `ctr` style instance in which the Object key represents the root CSS selector, and the Object value represents the CSS style properties.

{!javascript/yaml/_code/syntax-A.code.md!}
{!javascript/yaml/_code/syntax-B.code.md!}
{!javascript/yaml/_code/syntax-C.code.md!}

__Notes__:

+ It may be helpful it you cruz on over to the [JS-YAML demo](http://nodeca.github.io/js-yaml/), a YAML JavaScript parser so you can see how YAML is parsed into Javascript
+ Don't over-mystify what is happening here; all `ctr` does is parse the YAML into a JS Object and uses the Object to create a style via the [`create`](../javascript/methods.md#create){: .pjax} method

<div class="cf"></div>
<div class="end"></div>

