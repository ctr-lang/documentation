# Basic
<div class="te-verified"></div>

__Description__: A `shorthand` Object in a `state`, `on`, `non`, `common`, or `option` Object alters property-specific transition values through a target property key whose List value corresponds to specific option values.

{!state/shorthand/_code/basic.code.md!}
{!state/shorthand/_code/basic.fixture.md!}

__Notes__

+ Object key represents the target property
+ Order of shorthand List values
    1. `transition-duration`
    2. `transition-delay`
    3. `transition-timing-function`
- `<target:property>: <duration> <delay> <ease>`
+ Any property not specified in the `shorthand` Object inherits the set default option values

<div class="cf"></div>
<div class="end"></div>

