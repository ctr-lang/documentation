# Em and Rem

__Description__: The value for responsive size units `em` and `rem` are calculated from a base `root-size`.

{!helpers/responsive-text/_code/em-and-rem-A.code.md!}
{!helpers/responsive-text/_code/em-and-rem-A.fixture.md!}

{!helpers/responsive-text/_code/em-and-rem-D.code.md!}
{!helpers/responsive-text/_code/em-and-rem-D.fixture.md!}

__Notes__

+ The default `root-size` is `16px` but you can alter this value globally, locally, or on an individual scope level as demonstrated in the examples
    * `font-size` <span data-nbsp="43"></span>  === <span data-nbsp="3"></span> `font-size-root`
    * `line-height` <span data-nbsp="27"></span> === <span data-nbsp="3"></span> `line-height-root`
    * `letter-spacing` <span data-nbsp="3"></span> === <span data-nbsp="3"></span> `letter-spacing-root`
    * `root-size` <span data-nbsp="43"></span> === <span data-nbsp="3"></span> all of the above
+ `em` and `rem` can also be used with `letter-spacing`; I just omitted it for brevity

<div class="cf"></div>
<div class="end"></div>

