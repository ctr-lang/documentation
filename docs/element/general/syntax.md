# Syntax

__Description__: `element` is defined as a pseudo-class or pseudo-element  whose `<identifier>` does __not__ alter the state.

{!element/general/_code/syntax.syntax.md!}

__Notes__

+ Regex Match: `/^elm$|^element$|^elm-|^element-|^customElm|^before$|^after$|-child$|-child\(\d+\)$|-type$|-type\(\d+\)$/i`
+ Pseudo-classes that __alter__ the state:
    + `active`  <span data-nbsp="3"></span> -  <span data-nbsp="3"></span> `checked`  <span data-nbsp="3"></span> -  <span data-nbsp="3"></span> `disabled`  <span data-nbsp="3"></span> -  <span data-nbsp="3"></span> `enabled`  <span data-nbsp="3"></span> -  <span data-nbsp="3"></span> `focus`  <span data-nbsp="3"></span> -  <span data-nbsp="3"></span> `in-range`  <span data-nbsp="3"></span> -  <span data-nbsp="3"></span> `hover`
    + `invalid`  <span data-nbsp="3"></span> -  <span data-nbsp="3"></span> `link`  <span data-nbsp="3"></span> -  <span data-nbsp="3"></span> `optional`  <span data-nbsp="3"></span> -  <span data-nbsp="3"></span> `out-of-range`  <span data-nbsp="3"></span> -  <span data-nbsp="3"></span> `required`  <span data-nbsp="3"></span> -  <span data-nbsp="3"></span> `valid`  <span data-nbsp="3"></span> -  <span data-nbsp="3"></span> `visited`
    * If you want to use one of these pseudo-classes use a [`state`](./../state/general.md){: .pjax}
    * While you could create a `state` using an `element` Object and vice versa, it would be counter-productive
+ Due to the unique nature of the negation pseudo-class `not` it is a feature unto itself located at [`non`](../non/general.md){: .pjax}
+ <span class="mdn-tag">MDN</span> [Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/pseudo-classes)
+ <span class="mdn-tag">MDN</span> [Pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)

<div class="cf"></div>
<div class="end"></div>

