# Syntax

__Description__: `offset` is defined as a `grid` utility that alters the position of an element or elements left, right, up, or down through the `margin-lef` or `margin-top` property.

__Arguments__:

+ `<fraction>` <span class="arr-i"></span> `String | Number`
    * Required argument
    * The amount the element shifts relative to its parent container
+ `<gutter>` <span class="arr-i"></span> `String | Literal`
    * Default: `30px`
    * Sets the gap between elements
    * A gutter of `0` equals no gutter at all
+ `<direction>` <span class="arr-i"></span> `String` <span class="arr-i"></span> `'column' | 'row'`
    * Default: `'row'`
    * The type of grid that `offset` is being applied to

{!grid/offset/_code/syntax.syntax.md!}

__Notes__

+ You can use the `default` keyword to use the default value
+ For the sake of brevity, I use the shorthand syntax for the examples
+ <span class="lost-tag">Lost</span> [Offset](http://lostgrid.org/docs.html#lost-offset)

<div class="cf"></div>
<div class="end"></div>

