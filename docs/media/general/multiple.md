# Multiple

__Description__: Multiple key-value pairs specified in the `query` Object create conditional group rules. Additionally, a value can be a List to create a property with multiple conditions.

{!media/general/_code/multiple-A.code.md!}
{!media/general/_code/multiple-A.fixture.md!}

{!media/general/_code/multiple-B.code.md!}
{!media/general/_code/multiple-B.fixture.md!}

__Notes__

+ By default, the conditional group is composed with the `and` logical operator
+ An `or` logical operator can be defined through an [`orCondition`](./../media/logical-operator.md#or){: .pjax} Object
+ Condition A: If the `window` `width` `and` `height` is less than `800px` then the `background` of `.test` is `red`
+ Condition B: If the `window` `width` is less than `800px` `and` `50vw` then the `background` of `.test` is `red`

<div class="cf"></div>
<div class="end"></div>

