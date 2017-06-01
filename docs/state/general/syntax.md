# Syntax

__Description__: `state` is defined as any pseudo-class that alters the state of an element.

{!state/general/_code/syntax-A.syntax.md!}
{!state/general/_code/syntax-B.syntax.md!}

__Notes__

+ State-altering pseudo-classes:
    + `active`  <span data-nbsp="3"></span> -  <span data-nbsp="3"></span> `checked`  <span data-nbsp="3"></span> -  <span data-nbsp="3"></span> `disabled`  <span data-nbsp="3"></span> -  <span data-nbsp="3"></span> `enabled`  <span data-nbsp="3"></span> -  <span data-nbsp="3"></span> `focus`  <span data-nbsp="3"></span> -  <span data-nbsp="3"></span> `in-range`  <span data-nbsp="3"></span> -  <span data-nbsp="3"></span> `hover`
    + `invalid`  <span data-nbsp="3"></span> -  <span data-nbsp="3"></span> `link`  <span data-nbsp="3"></span> -  <span data-nbsp="3"></span> `optional`  <span data-nbsp="3"></span> -  <span data-nbsp="3"></span> `out-of-range`  <span data-nbsp="3"></span> -  <span data-nbsp="3"></span> `required`  <span data-nbsp="3"></span> -  <span data-nbsp="3"></span> `valid`  <span data-nbsp="3"></span> -  <span data-nbsp="3"></span> `visited`
    * If you are using any other pseudo-class or pseudo-element use the [`element`](./../element/general.md){: .pjax} feature
+ Regex: `^states$|^state$|^state-|^customSt|^hover$|^hover-|^focus$|^focus-|^active$|^active-|^checked$|^checked-|^link$|^link-|^visited$|^visited-|^valid$|^valid-|^required$|^required-|^out-of-range$|^out-of-range-|^optional$|^optional-|^invalid$|^invalid-|^in-range$|^in-range-|^enabled$|^enabled-|^disabled$|^disabled-/i`
+ It would be in your best interest to review [`transition`](./../transition/general.md){: .pjax} feature before you dive into `state`
+ For the sake of brevity, I use the [State Key](./../state/key.md#state-key){: .pjax} syntax of `hover` rather than specifying a `state` Object with a `key` property to define the `<identifier>`
+ <span class="mdn-tag">MDN</span> [Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

<div class="cf"></div>
<div class="end"></div>

