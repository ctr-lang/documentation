# Above
<div class="te-verified"></div>

__Description__: An `above` mixin can be created with an Object key that matches `media-+<query:helper | raw:value>`. 

{!media/mixin-key/_code/above.code.md!}
{!media/mixin-key/_code/above.fixture.md!}

__Notes__

+ Regex match: `/^media-+/i`
+ Key must be a String
+ `media-+<raw:value>` <span data-nbsp="3"></span> === <span data-nbsp="3"></span> `(min-width: <raw:value>)`
+ `media-+<query:helper>` <span data-nbsp="3"></span> === <span data-nbsp="3"></span> `(min-width: <query:helper>)`


<div class="end"></div>

