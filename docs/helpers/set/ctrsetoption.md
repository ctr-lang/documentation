# ctrSetOption

__Description__: The `ctrSetOption` Stylus invocation sets global `ctr` [options](./../basic/global-option.md){: .pjax}.

__Parameters__

+ `ctrSetOption(<option>)`
+ `ctrSetOption(<option>, {<reset>: false, <once>: false, <ctrrc>: true})`

__Arguments__

+ `<option>`
    * Type: `Object`
    * Desc: The `ctr` global [options](./../basic/global-option.md){: .pjax} to be set
+ `<once>`
    * Type: `Boolean | false`
    * Desc: Set options to be applied once to the following `ctr` instance then reverted back to the previous option state
+ `<reset>`
    * Type: `Boolean | false`
    * Desc: Resets options back to the "base" defined in [`.ctrrc.yml`](../helpers/dot-ctrrc.md){: .pjax} or to the default options
+ `<ctrrc>`
    * Type: `Boolean | true`
    * Desc: Overrides the default `reset` action of resetting back to the "base" disregarding [`.ctrrc.yml`](../helpers/dot-ctrrc.md){: .pjax}, effectively resetting to the default options

__Example__

{!helpers/set/_code/ctrsetoption.code.md!}
{!helpers/set/_code/ctrsetoption.fixture.md!}

__Notes__

+ Always overwrites previously defined or default options
+ In practice, this should not be a replacement for [`.ctrrc.yml`](../helpers/dot-ctrrc.md){: .pjax}, but meh, sometime I do
+ A YAML `option` Object can be declared through an Object with the key of `ctr:::option`
+ Multiple instances of `ctr:::setOption` in a YAML file can be achieved through modifier key syntax as such `ctr:::setOption:<modifier>:`
    * Regex: `^ctr:::setOption`

<div class="cf"></div>
<div class="end"></div>

