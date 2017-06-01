# Syntax

__Description__: `waffle` is defined as a `grid` utility that creates a horizontal and vertical grid (aka. waffle grid) which resembles a tic-tac-toe board.

__Arguments__:

+ `<fraction>` <span class="arr-i"></span> `String | Number`
    * Required argument
    * Sets the `width` and `height` of the element relative to its parent container
+ `<gutter>` <span class="arr-i"></span> `String | Literal`
    * Default: `30px`
    * Sets the gap between elements through `margin-right` and `margin-bottom`
+ `<cycle>` <span class="arr-i"></span> `String | Number`
    * Default: `fraction` denominator
    * Set `margin-right: 0` on the `nth-child` in the row and `margin-bottom: 0` on the `nth-last-child` in the column
+ `<flex>` <span class="arr-i"></span> `Boolean`
    * Default: `true`
    * If `waffle` should use flexbox

__Example__

{!grid/waffle/_code/syntax.syntax.md!}

__Notes__

+ You can use the `default` keyword to use the default value
+ Both flex and non-flex examples should yield the same display results
+ It is of __critical__ importance that your parent element is a flexbox [container](./../grid/general.md#flex-container){: .pjax}, or if you are not using flexbox, the [clearfix](./../helpers/general.md#clearfix){: .pjax} is applied to the parent element
+ <span class="lost-tag">Lost</span> [Waffle](http://lostgrid.org/docs.html#waffle-grids)

<div class="cf"></div>
<div class="end"></div>

