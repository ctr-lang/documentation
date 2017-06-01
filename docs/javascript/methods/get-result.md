# getResult
<div class="te-verified"></div>

__Description__: The `getResult` method returns the rendered CSS for the `ctr` instance. Once `getResult` is invoked the result Set is cleared.

__Parameters__

+ `getResult({<reset>: true, <raw>: false})`
+ `getResult(<reset> = true, <raw> = false)`

__Arguments__

+ `<reset>` <span class="arr-i"></span> `Boolean | true`
    * Clear's the result Set
+ `<raw>` <span class="arr-i"></span> `Boolean | false`
    * Returns the raw Set of rendered styles

__Example__

{!javascript/methods/_code/get-result-A.code.md!}
{!javascript/methods/_code/get-result-B.code.md!}

__Notes__

+ Alias: `getRes`
+ Tests: [`/__tests__/cases-js/public-methods/get-result`](https://github.com/ctr-lang/ctr/tree/master/__tests__/cases-js/public-methods/get-result)

<div class="cf"></div>
<div class="end"></div>

