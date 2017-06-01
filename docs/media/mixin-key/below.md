# Below
<div class="te-verified"></div>

__Description__: A `below` mixin can be created with an Object key that matches `media--<query:helper | raw:value>`.

{!media/mixin-key/_code/below.code.md!}
{!media/mixin-key/_code/below.fixture.md!}

__Notes__

+ Regex match: `/^media--/i`
+ Keys must be a String
+ `below: <raw:value>` <span data-nbsp="3"></span> === <span data-nbsp="3"></span> `(max-width: <raw:value>)`
+ `below: <query:helper>` <span data-nbsp="3"></span> === <span data-nbsp="3"></span> `(max-width: <query:helper>)`


<div class="end"></div>

