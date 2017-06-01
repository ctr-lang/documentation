# setReset

__Description__: The `setReset` method resets all or specific "set" methods set in `setOption`, <span data-nbsp="2"></span> `setTransform`, <span data-nbsp="2"></span> `setVariable`, <span data-nbsp="2"></span> `setYamlTransfrom`.

__Parameters__

+ `setReset()`
+ `setReset({<variable>, <option>, <transform>, <yamlTransform>})`

__Arguments__

+ `argumentless`
    * Resets all "set" methods and reverts to the set defaults or the specified defaults defined in [`.ctrrc.yml`](../helpers/dot-ctrrc.md){: .pjax}
+ `<variable>` <span class="arr-i"></span> `Object | Boolean | false`
    * New default variable, or to reset or not
+ `<option>` <span class="arr-i"></span> `Object | Boolean | false`
    * New default options, or to reset or not
+ `<transform>` <span class="arr-i"></span> `Function | [Function] | Boolean | false`
    * New default transformations, or to reset or not
+ `<yamlTransform>` <span class="arr-i"></span> `Function | [Function] | Boolean | false`
    * New default YAML transformations, or to reset or not

__Example__

{!javascript/methods/_code/set-reset.code.md!}

__Notes__

+ Alias: `development`
+ Due to the design decision of not explicitly overwriting "set" methods, it would be advantageous to use `setReset` if you're doing a great deal of "set" play during development
+ Tests: [`/__tests__/cases-js/public-methods/set-reset`](https://github.com/ctr-lang/ctr/tree/master/__tests__/cases-js/public-methods/set-reset)


<div class="cf"></div>
<div class="end"></div>

