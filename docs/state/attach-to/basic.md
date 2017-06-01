# Basic

__Description__: The value for the `attachTo` option property specifies a parent selector for the `state` pseudo-class condition to attach to.

{!state/attach-to/_code/basic.code.md!}
{!state/attach-to/_code/basic.fixture.md!}

__Notes__

+ The index of the root selector is `0` or the string `'root'`, that being said, you cannot use `attachTo` on the root level
+ Why would I want to do this?
    - Because it is an ultra powerful concept that allows you to perform all kinds of nifty `state` logic
    - The basic gist is that it allows you to attach a `state` to a parent element so that the `state` action takes place if the parent meets the `state` condition
    - In the example above, the `p` element `hover` state transition occurs when the user hovers over `.myKoolClass` rather than itself

<div class="cf"></div>
<div class="end"></div>

