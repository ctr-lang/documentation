# Option

__Description__: An `option` Object in an `animation` Object alters the default animation property values.

{!animation/general/_code/option.code.md!}
{!animation/general/_code/option.fixture.md!}

__Notes__

+ Option keys and their corresponding `animation` property:
    + `duration` <span data-nbsp="11"></span> === <span data-nbsp="3"></span> `animation-duration`
    + `ease` <span data-nbsp="44"></span> === <span data-nbsp="3"></span> `animation-timing-function`
    + `delay` <span data-nbsp="35"></span> === <span data-nbsp="3"></span> `animation-delay`
    + `count` <span data-nbsp="35"></span> === <span data-nbsp="3"></span> `animation-iteration-count`
    + `direction` <span data-nbsp="3"></span> === <span data-nbsp="3"></span> `animation-direction`
    + `mode` <span data-nbsp="44"></span> === <span data-nbsp="3"></span> `animation-fill-mode`
    + `state` <span data-nbsp="35"></span> === <span data-nbsp="3"></span> `animation-play-state`
+ Any option that is not defined will use the set `default` value:
    + `duration` <span data-nbsp="11"></span> === <span data-nbsp="3"></span> `normal`
    + `ease` <span data-nbsp="44"></span> === <span data-nbsp="3"></span> `running`
    + `delay` <span data-nbsp="35"></span> === <span data-nbsp="3"></span> `0s`
    + `count` <span data-nbsp="35"></span> === <span data-nbsp="3"></span> `cubic-bezier(0.42, 0, 0.58, 1)`
    + `direction` <span data-nbsp="3"></span> === <span data-nbsp="3"></span> `1`
    + `mode` <span data-nbsp="44"></span> === <span data-nbsp="3"></span> `0.5s`
    + `state` <span data-nbsp="35"></span> === <span data-nbsp="3"></span> `none`
+ All of the above `option` properties, including the `name` property, can be defined inside or outside the `option` Object
+ If you need to, or prefer the `animation` shorthand properties syntax, as in `animation: duration | timing-function | ...`, you can do so through the [`animationShorthand`](../animation/specific-option.md#shorthand-properties){: .pjax} option

<div class="cf"></div>
<div class="end"></div>

