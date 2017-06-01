# setVariable

__Description__: The `setVariable` method sets [`global variables`](../variable/general.md){: .pjax} that can be referenced through the variable String syntax: `$<variable>$`.

__Parameters__

+ `setVariable(<variable>)`
+ `setVariable({reset: false, once: false, ctrrc: true, overwrite: false})`
+ `setVariable(<variable>, {reset: false, once: false, ctrrc: true, overwrite: false})`

__Arguments__

+ `<variable>` <span class="arr-i"></span> `Object`
    * Sets global variables that can be resolved in both `ctr` instances and classes
+ `<ctrrc>` <span class="arr-i"></span> `Boolean | true`
    * Overrides the default `reset` action of resetting back to the [`.ctrrc.yml`](../helpers/dot-ctrrc.md){: .pjax} regardless of if it exists or not
    * This option is to be used in conjunction with `<reset>`
+ `<once>` <span class="arr-i"></span> `Boolean | false`
    * Sets the variables to be applied once to the following instance and then disregarded
+ `<reset>` <span class="arr-i"></span> `Boolean | false`
    * Resets all variables set through `setVariable` and reverts to the specified variables defined in [`.ctrrc.yml`](../helpers/dot-ctrrc.md){: .pjax} if any exists
+ `<overwrite>` <span class="arr-i"></span> `Boolean | false`
    * By default, a previous set variables set through `setVariable` can not be overwritten unless explicit permission is given

__Example__

{!javascript/methods/_code/set-variable.code.md!}

__Notes__

+ Alias: `setVar`
+ Not sure how much mileage you will get out of this method since you can easily create your own custom variable solution in Javascript, nevertheless, it's available
+ Goes hand in hand with YAML
+ Tests: [`/__tests__/cases-js/public-methods/set-variable`](https://github.com/ctr-lang/ctr/tree/master/__tests__/cases-js/public-methods/set-variable)


<div class="cf"></div>
<div class="end"></div>

