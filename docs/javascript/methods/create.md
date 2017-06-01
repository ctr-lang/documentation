# create
<div class="te-verified"></div>

__Description__: The `create` method is the main squeeze. It creates and processes styles which are aggregated in the `ctr` instance as a [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).

__Parameters__

+ `create(<selector>, <data>)`
+ `create(<selector>, <data>, [<option> | <transform>])`
+ `create(<selector>, <data>, <option>, <transform>)`
+ `create({<selector>: <data>})`
    - Abstinent a selector the single Object parameter must be formatted in key-value pair fashion
    - The `<option>` and `<transfrom>` parameter can be used in the same interchangeable manner as illustrated above

__Arguments__

+ `<selector>` <span class="arr-i"></span> `String`
    * Selector for `ctr` styles
+ `<data>` <span class="arr-i"></span> `Object | Template Literal | String`
    * `ctr` styles
+ `<option>` <span class="arr-i"></span> `Object`
    * Global `ctr` options such as the hover duration that will only be applied to the styles at hand
+ `<transform>` <span class="arr-i"></span> `Function | [Function, Function, ...]`
    * Custom transform logic to be applied to rendered styles

__Example__

{!javascript/methods/_code/create-A.code.md!}
{!javascript/methods/_code/create-B.code.md!}

__Notes__

+ Shy away from using Literal's and never use String's unless you're absolutely sure you know what you're doing
    * If you wish to avoid the ugliness plight of JS Objects than YAML is your answer
+ There is no limit on create, and the best part is once the style is created it's cached in a [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) so you can blaze like a bat out of hell
+ Tests: [`/__tests__/cases-js/public-methods/create`](https://github.com/ctr-lang/ctr/tree/master/__tests__/cases-js/public-methods/create)

<div class="cf"></div>
<div class="end"></div>

