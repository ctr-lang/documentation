# Basic

__Description__: A `shorthand` Object alters property-specific animation values through an `<identifier>` key whose List value corresponds to specific option values.

{!animation/shorthand/_code/basic.code.md!}
{!animation/shorthand/_code/basic.fixture.md!}

__Notes__

+ Order of shorthand properties:
    * Object key will represent the `<identifier>`
        1. `animation-duration`
        2. `animation-delay`
        3. `animation-timing-function`
        4. `animation-iteration-count`
        5. `animation-direction`
        6. `animation-fill-mode`
        7. `animation-play-state`
    * `<identifier>: <duration> <delay> <ease> <count> <dir> <mode> <state>`
+ Any shorthand property that is omitted or uses the `default` key inherits the set default value
+ The `shorthand` Object can either be defined in the root of the `animation` Object or in the `option` Object

<div class="cf"></div>
<div class="end"></div>

