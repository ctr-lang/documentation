# Syntax

__Description__: `align` is defined as a `grid` alignment utility that is set on the parent element and applied to the nested child element or elements.

__Arguments__:

+ `<location>` <span class="arr-i"></span> `String`
    * Required argument
    * Sets the position of the nested child element or elements relative to the parent element on which it is set
    * Shortlist: `reset|horizontal|vertical|top-left|top-center|top|top-right|middle-left|left|middle-center|center|middle-right|right|bottom-left|bottom-center|bottom|bottom-right`
+ `<flex>` <span class="arr-i"></span> `Boolean`
    * Default: `true`
    * If `align` should use flexbox

__Example__

{!grid/align/_code/syntax.syntax.md!}

__Notes__

+ If you wish to align the element in and of itself, check out the [align self](./../helpers/align.md){: .pjax} helper 
+ Both flex and non-flex examples should yield the same display results
+ For the sake of brevity, I use the shorthand syntax for the examples
+ <span class="lost-tag">Lost</span> [Align](http://lostgrid.org/docs.html#lost-align)

<div class="cf"></div>
<div class="end"></div>

