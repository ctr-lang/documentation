# Info

The idea of presets builds upon local variables to offer localized default configurations. This helps mitigate micro-class creep, which happens when classes become too small and generalized. You tend to see micro-class creep in the majority of UI libraries, for example, when a handful of classes are used to construct a single element such as a button. This makes sense in an HTML multi-class design pattern, but this pattern, in my eyes, is an anti-pattern for `ctr`. My rule of thumb is, when possible, always strive for a single source of truth architecture and presets help to achieve this goal.

<div class="cf"></div>
<div class="end"></div>

