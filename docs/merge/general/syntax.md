# Syntax

__Description__: `merge` is defined as a utility that merges internal and external Objects into a `ctr` instance.

{!merge/general/_code/syntax.syntax.md!}

__Notes__

+ Regex: `/^merge$/i`
+ The `key` property merges List values via concatenation if conflict otherwise List values are not merged
+ `merge` does not merge the Object reference key while `mergeWith` does
    - `merge`: <span data-nbsp="35"></span> `{x: {a: 1, b: 2}}` <span data-nbsp="3"></span> = <span data-nbsp="3"></span> `{a: 1, b: 2}`
    - `mergeWith`: <span data-nbsp="3"></span> `{x: {a: 1, b: 2}}` <span data-nbsp="3"></span> = <span data-nbsp="3"></span> `{x: {a: 1, b: 2}}`

<div class="cf"></div>
<div class="end"></div>

