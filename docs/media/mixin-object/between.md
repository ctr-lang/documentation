# Between
<div class="te-verified"></div>

__Description__: A `between` mixin can be created in a `medias` Object with an Object key that matches `<query:helper:min | raw:value:min>-<query:helper:max | raw:value:max>`.

{!media/mixin-object/_code/between.code.md!}
{!media/mixin-object/_code/between.fixture.md!}

__Notes__

+ Key does not have to be a String, but it should be
+ `<raw:value:min>-<raw:value:max>` <span data-nbsp="3"></span> === <span data-nbsp="3"></span> `(min-width: <raw:value:min>) and (max-width: <raw:value:max>)`
+ `<query:helper:min>-<query:helper:max>` <span data-nbsp="3"></span> === <span data-nbsp="3"></span> `(min-width: <query:helper:min>) and (max-width: <query:helper:max>)`


<div class="cf"></div>
<div class="end"></div>

