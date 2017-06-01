
# Syntax

__Description__: `row` is defined as a `grid` utility that creates a row-based grid for the element or elements it is applied to. 

__Arguments__:

+ `<fraction>` <span class="arr-i"></span> `String | Number`
    * Required argument
    * Sets the `height` of the element relative to its parent container
+ `<gutter>` <span class="arr-i"></span> `String | Literal`
    * Default: `30px`
    * Sets the gap between rows through `margin-bottom`
+ `<flex>` <span class="arr-i"></span> `Boolean`
    * Default: `true`
    * If `row` should use flexbox

{!grid/row/_code/syntax.syntax.md!}

__Notes__

+ You can use the `default` keyword to use the default value
+ It is of __critical__ importance that your parent element is a flexbox [container](./../grid/general.md#flex-container){: .pjax}, or if you are not using flexbox, the [clearfix](./../helpers/general.md#clearfix){: .pjax} is applied to the parent element
+ Both flex and non-flex examples should yield the same display results
+ <span class="lost-tag">Lost</span> [Row]( http://lostgrid.org/docs.html#lost-row)

<div class="cf"></div>
<div class="end"></div>

