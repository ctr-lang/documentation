# Info

Global `ctr` options are like trading options, and if you don't know what you're doing, you're going to have a bad time. The idea behind global options is to have a single source of "default" truth for both the internal workings and control mechanics of `ctr`. For example, let's say the default option value of `0.5s` for the `hover` `transition` is a bit too long for your tastes. Rather than setting the `duration` option to `0.38s` every time you create a `hover` state you can set it once globally. Furthermore, global options can be set on a `ctr` instance basis for a hybrid approach. Global options can be set through [`ctrSetOption`](../helpers/set.md#ctrsetoption){: .pjax} and/or [`.ctrrc.yml`](../helpers/dot-ctrrc.md){: .pjax}, however, the mechanics of both are not covered here but rather on their respected page.

__Notes__

+ I personally perfer using the [`.ctrrc.yml`](../helpers/dot-ctrrc.md){: .pjax} method

<div class="cf"></div>
<div class="end"></div>

