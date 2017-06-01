# Syntax

__Description__: `mergeWith` is defined as a utility that merges internal Objects into a `ctr` instance.

{!merge/merge-with/_code/syntax.syntax.md!}

__Notes__

+ Regex: `/^mergeWith$/i`
+ The `key` property merges List values via concatenation if conflict otherwise List values are not merged
+ `mergeWith` merges the Object reference key while `merge` does not
    - `merge`: <span data-nbsp="35"></span> `{x: {a: 1, b: 2}}` <span data-nbsp="3"></span> = <span data-nbsp="3"></span> `{a: 1, b: 2}`
    - `mergeWith`: <span data-nbsp="3"></span> `{x: {a: 1, b: 2}}` <span data-nbsp="3"></span> = <span data-nbsp="3"></span> `{x: {a: 1, b: 2}}`

<div class="cf"></div>
<div class="end"></div>

