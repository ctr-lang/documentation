# Even Between

__Description:__ Selects all even children between the `<first>` and `<last>` children.

{!element/nth-key/_code/even-between.code.md!}
{!element/nth-key/_code/even-between.fixture.md!}

__Notes__

+ `even-between(first, last)` alias: `evenBetween(first, last)` <span data-nbsp="3"></span> `fm-even-between(first, last)`
+ Eval: `<element>:nth-child(even):nth-child(n+${first}):nth-child(-n+${last})`

<div class="cf"></div>
<div class="end"></div>

