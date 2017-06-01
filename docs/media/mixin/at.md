# At

__Description__: The `at` property creates a media query condition that is applied when the screen is less than the `at` value and greater than the previous query helper.

{!media/mixin/_code/at.code.md!}
{!media/mixin/_code/at.fixture.md!}

__Notes__

+ __Only__ works with query helpers, not raw values
+ `at: <query:helper>` <span data-nbsp="3"></span> === <span data-nbsp="3"></span> `(min-width: <query:helper-prv>) and (max-width: <query:helper>)`

<div class="cf"></div>
<div class="end"></div>

