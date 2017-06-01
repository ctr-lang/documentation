# Column Syntax

__Description__: `masonry-column` is defined as a `grid` utility that creates a masonry column-based grid for the element or elements it is applied to.

__Arguments__:

+ `<fraction>` <span class="arr-i"></span> `String | Number`
    * Required argument.
    * Sets the `width` of the element relative to its parent container.
+ `<gutter>` <span class="arr-i"></span> `String | Literal`
    * Default: `30px`
    * Sets the gap between elements in a column through `margin-right` and `margin-left`.
+ `<flex>` <span class="arr-i"></span> `Boolean`
    * Default: `true`
    * If `column` should use flexbox.

__Example__

{!grid/masonry/_code/column-syntax.syntax.md!}

__Notes__

+ You can use the `default` keyword to use the default value
+ Both flex and non-flex examples should yield the same display results
+ <span class="lost-tag">Lost</span> [Masonry Support](http://lostgrid.org/docs.html#masonry-support)

<div class="cf"></div>
<div class="end"></div>

