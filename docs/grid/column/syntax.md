# Syntax

__Description__: `column` is defined as a `grid` utility that creates a column-based grid for the element or elements it is applied to. 

__Arguments__:

+ `<fraction>` <span class="arr-i"></span> `String | Number`
    * Required argument
    * Sets the `width` of the element relative to its parent container
+ `<gutter>` <span class="arr-i"></span> `String | Literal`
    * Default: `30px`
    * Sets the gap between elements in a column through `margin-right`
+ `<cycle>` <span class="arr-i"></span> `String | Number`
    * Default: `fraction` denominator
    * Set `margin-right: 0` on the `nth-child` in the column
+ `<flex>` <span class="arr-i"></span> `Boolean`
    * Default: `true`
    * If `column` should use flexbox
+ `<none>` <span class="arr-i"></span> `Boolean`
    * Default: `false`
    * Resets the column back to the browser defaults

__Example__

{!grid/column/_code/syntax.syntax.md!}

__Notes__

+ You can use the `default` keyword to use the default value
+ Both flex and non-flex examples should yield the same display results
+ It is of __critical__ importance that your parent element is a flexbox [container](./../grid/general.md#flex-container){: .pjax}, or if you are not using flexbox, the [clearfix](./../helpers/general.md#clearfix){: .pjax} is applied to the parent element
+ <span class="lost-tag">Lost</span> [Column](http://lostgrid.org/docs.html#lost-column)

<div class="cf"></div>
<div class="end"></div>

