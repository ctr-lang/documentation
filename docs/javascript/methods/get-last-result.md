# getLastResult

__Description__: The `getLastResult` method returns the rendered CSS for the last result Set processed by the `ctr` instance. Unlike `getResult` by default it does not clear out the result Set.

__Parameters__

+ `getLastResult({<reset>: false, <raw>: false})`
+ `getLastResult(<reset> = false, <raw> = false)`

__Arguments__

+ `<reset>` <span class="arr-i"></span> `Boolean | false`
    * Removes the last result Set, as in itself, from the result Set
+ `<raw>` <span class="arr-i"></span> `Boolean | false`
    * Returns the raw Set of rendered styles

__Example__

{!javascript/methods/_code/get-last-result.code.md!}

__Notes__

+ Tests: [`/__tests__/cases-js/public-methods/get-last-result`](https://github.com/ctr-lang/ctr/tree/master/__tests__/cases-js/public-methods/get-last-result)

<div class="cf"></div>
<div class="end"></div>

