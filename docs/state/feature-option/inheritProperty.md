# inheritProperty

__Description__: The `inheritProperty` option property is a [`media`](./../media/general.md){: .pjax} specific option. It controls whether or not the `state` transition properties are regenerated due to an introduction of a new CSS property or `option` value in a `media` feature. 

{!state/feature-option/_code/inheritProperty-A.code.md!}
{!state/feature-option/_code/inheritProperty-A.fixture.md!}

{!state/feature-option/_code/inheritProperty-B.code.md!}
{!state/feature-option/_code/inheritProperty-B.fixture.md!}

__Notes__

+ The only time `inheritProperty` defaults to `true` is in a `media` feature, otherwise the default is `false`
+ Admittedly, this option will make no sense if you are not deeply familiar with the perils of creating a `state` with `media` conditions
    * Rule of thumb, `ctr` takes care of everything for you thus you probably will never need this option
    * If you are a l33t C$S haxx0r you may once or twice find this option handy
+ `inheritProperty` alias: `inheritProps`

<div class="cf"></div>
<div class="end"></div>

