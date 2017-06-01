# ctrSetVariable

__Description__: The `ctrSetVariable` Stylus invocation sets global `ctr` [variables](./../variable/general.md){: .pjax}.

__Parameters__

+ `ctrSetVariable(<variable>)`
+ `ctrSetVariable(<variable>, {<reset>: false, <once>: false, <ctrrc>: true, <overwrite: false>})`

__Arguments__

+ `<variable>`
    * Type: `Object`
    * Desc: The global `ctr` [variables](./../variable/general.md){: .pjax} to be set
+ `<once>`
    * Type: `Boolean | false`
    * Desc: Set variables to be applied once to the following `ctr` instance then reverted back to the previous variable state
+ `<reset>`
    * Type: `Boolean | false`
    * Desc: Resets variables back to the "base" defined in [`.ctrrc.yml`](../helpers/dot-ctrrc.md){: .pjax} or to an empty Object
+ `<ctrrc>`
    * Type: `Boolean | true`
    * Desc: Overrides the default `reset` action of resetting back to the "base" disregarding [`.ctrrc.yml`](../helpers/dot-ctrrc.md){: .pjax}, effectively resetting to an empty Object
+ `<overwrite>`
    * Type: `Boolean | false`
    * Desc: Overwrites previously set variables

__Example__

{!helpers/set/_code/ctrsetvariable.code.md!}
{!helpers/set/_code/ctrsetvariable.fixture.md!}

__Notes__

+ The intended use of `ctr` variables is to replace Stylus variables
+ YAML syntax: `ctr:::setVar:`
    * In YAML you can only set the `<variable>` Object since there is not way to pass the second argument in YAML
+ Multiple instances of `ctr:::setVariable` in a YAML file can be achieved through modifier key syntax as such `ctr:::setVariable:<modifier>:`
    * Regex: `^ctr:::setVariable`
+ Alias: `ctrSetVar`



<div class="cf"></div>
<div class="end"></div>

