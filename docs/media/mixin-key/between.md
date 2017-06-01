# Between

__Description__: A `between` mixin can be created with an Object key that
matches `media-|<query:helper:min | raw:value:min>-<query:helper:max | raw:value:max>`.

{!media/mixin-key/_code/between.code.md!}
{!media/mixin-key/_code/between.fixture.md!}

__Notes__

+ Regex match: `/^media-|/i`
+ Key does not have to be in String format, but it should be
+ `media-|<raw:value:min>-<raw:value:max>` <span data-nbsp="3"></span> === <span data-nbsp="3"></span> `(min-width: <raw:value:min>) and (max-width: <raw:value:max>)`
+ `media-|<query:helper:min>-<query:helper:max>` <span data-nbsp="3"></span> === <span data-nbsp="3"></span> `(min-width: <query:helper:min>) and (max-width: <query:helper:max>)`

<div class="end-last"></div>

