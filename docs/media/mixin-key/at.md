# At

__Description__: An `at` mixin can be created with an Object key that matches `media-<query:helper>`.

{!media/mixin-key/_code/at.code.md!}
{!media/mixin-key/_code/at.fixture.md!}

__Notes__

+ Regex match: `/^media-/i`
+ Key does not have to be a String, but it should be
+ This match is run last, so you do not need to worry about conflicts with the other mixin keys
+ `media-<query:helper>` <span data-nbsp="3"></span> === <span data-nbsp="3"></span> `(min-width: <query:helper-prv>) and (max-width: <query:helper>)`

<div class="end"></div>

