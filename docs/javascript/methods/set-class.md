# setClass

__Description__: The `setClass` method sets (adds) a `ctr` [`class`](./../class/general.md){: .pjax} instance.

__Parameters__

+ `setClass(<class>, <data>)`
+ `setClass(<class>, <data>, <option>)`
+ `setClass({<class>: <data>})`
    - Abstinent a class the single Object parameter must be formatted in key-value pair fashion
+ `setClass({<class>: <data>}, <option>)`

__Arguments__

+ `<class>` <span class="arr-i"></span> `String`
    * Class name
+ `<data>` <span class="arr-i"></span> `Object`
    * Class styles
+ `<option>` <span class="arr-i"></span> `Object`
    * `<option>.overwrite` <span class="arr-i"></span> `Boolean | false`
        + Overwrites any previous set class with the same class name

__Example__

{!javascript/methods/_code/set-class.code.md!}

__Notes__

+ Alias: `addClass`
+ In Javascript you can mock-up your own class data structure pretty easy so by no means should you feel locked-in, in this regard
+ Tests: [`/__tests__/cases-js/public-methods/set-class`](https://github.com/ctr-lang/ctr/tree/master/__tests__/cases-js/public-methods/set-class)

<div class="cf"></div>
<div class="end"></div>

