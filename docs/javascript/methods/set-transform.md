# setTransform

__Description__: The `setTransform` method creates a hook in the render callback to allow for the transformation of the resulting CSS String.

__Parameters__

+ `setTransform({<reset>: false, <once>: false})`
+ `setTransform(<transform>, {<reset>: false, <once>: false})`

__Arguments__

+ `<transform>` <span class="arr-i"></span> `Function | [Function, Function, ...]`
    * A single argument of the resulting CSS String is passed to the transform Function(s)
    * Functions are applied in the order they were received
    * Must return a String value otherwise disregarded
+ `<once>` <span class="arr-i"></span> `Boolean | false`
    * Sets the transforms to be applied once to the following instance and then disregarded
+ `<reset>` <span class="arr-i"></span> `Boolean | false`
    * Resets all transforms set through `setTransform`

__Example__

{!javascript/methods/_code/set-transform.code.md!}

__Notes__

+ Transform results are memoized
+ Tests: [`/__tests__/cases-js/public-methods/set-transform`](https://github.com/ctr-lang/ctr/tree/master/__tests__/cases-js/public-methods/set-transform)


<div class="cf"></div>
<div class="end"></div>

