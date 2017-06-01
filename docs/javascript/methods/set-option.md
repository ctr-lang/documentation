# setOption

__Description__: The `setOption` method sets global `ctr` options to replace the defaults through merging the new options with the default options. These set global options are applied to all styles processed by the instance.

__Parameters__

+ `setOption(<option>)`
+ `setOption({<ctrrc>: true, <once>: false, <overwrite>: false, <reset>: false})`
+ `setOption(<option>, {<ctrrc>: true, <once>: false, <overwrite>: false, <reset>: false})`

__Arguments__

+ `<option>` <span class="arr-i"></span> `Object`
    * Global `ctr` options whose defaults are defined in [`.ctrrc.yml`](../helpers/dot-ctrrc.md){: .pjax}
+ `<ctrrc>` <span class="arr-i"></span> `Boolean | true`
    * Overrides the default `reset` action of resetting back to the [`.ctrrc.yml`](../helpers/dot-ctrrc.md){: .pjax} regardless of if it exists or not
    * This option is to be used in conjunction with `<reset>`
+ `<once>` <span class="arr-i"></span> `Boolean | false`
    * Sets the options to be applied once to the following instance and then disregarded
+ `<reset>` <span class="arr-i"></span> `Boolean | false`
    * Resets all options set through `setOption` and reverts to the set defaults or the specified defaults defined in [`.ctrrc.yml`](../helpers/dot-ctrrc.md){: .pjax}
+ `<overwrite>` <span class="arr-i"></span> `Boolean | false`
    * By default, a previous set option set through `setOption` can not be overwritten unless explicit permission is given

__Example__

{!javascript/methods/_code/set-option-A.code.md!}
{!javascript/methods/_code/set-option-B.code.md!}

__Notes__

+ Important: If you're making heavy use of `setOption` it would be wise to utilize [`setReset`](../javascript/methods.md#setreset){: .pjax} due to the merging nature its action
+ In practice, this should not be a replacement for [`.ctrrc.yml`](../helpers/dot-ctrrc.md){: .pjax} but rather used to target a set of styles and then reset
+ Option priority: `local > create <option> > setOption > .ctrrc.yml > default`
+ Tests: [`/__tests__/cases-js/public-methods/set-option`](https://github.com/ctr-lang/ctr/tree/master/__tests__/cases-js/public-methods/set-option)

<div class="cf"></div>
<div class="end"></div>

