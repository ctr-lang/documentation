# With Option Values

__Description__: The `option` Obejct can be used in conjunction with `shorthand` notation.

{!animation/shorthand/_code/with-option-values.code.md!}
{!animation/shorthand/_code/with-option-values.fixture.md!}

__Notes__

+ This feature gives you the ability to specify options in a more direct fashion rather than having to resort to using the `default` key a million times
    + example: `1s ease-in default default default default paused` would just be a pain in the ass
+ If an option is specified in both the `option` Object and the `shorthand` List, the `shorthand` value will supersede
+ If an option is specified in the `option` Object and the `default` key is used in the `shorthand` List, the value defined in the `option` Object is inherited

<div class="cf"></div>
<div class="end-last"></div>

