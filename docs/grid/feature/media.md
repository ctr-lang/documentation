# Media

__Description__: [`media`](./../media/general.md){: .pjax} can be used in a [`grid`](./../grid/general.md){: .pjax}.

{!grid/feature/_code/media.code.md!}
{!grid/feature/_code/media.fixture.md!}

__Notes__

+ <b class="bugs">Known Bugs</b>: Unfortunately, I didn’t have the foresight to integrate this properly from the get-go, and various `media` combinations may not work, just cross your fingers and hope for the best
    + `ctr` will throw an error if it doesn't work and you will need to reverse the order, as in, put `grid` in `media` and not `media` in `grid`
+ No other features really make sense to put in a `grid`
+ The `option` Object is inherited via deep merge

<div class="cf"></div>
<div class="end-last"></div>

