# Basic

__Description__: The `animation` Object creates animation properties for the `<identifier>` at the scope level it is defined. Additionally, an `@keyframes` at-rule for the `<identifier>` can be created through a `timeline` Object in the root of the `animation` Object. If a `timeline` Object is defined, the waypoints for its `@keyframes` at-rule are specified in the `timeline` through a child Object in which the Object key represents the waypoint for its corresponding CSS property values.

{!animation/general/_code/basic.code.md!}
{!animation/general/_code/basic.fixture.md!}

__Notes__

* `animation` alias: `anim`
* `timeline` alias: `tl`
* You don't need to define `name: <identifier>`, but I recommend you do otherwise your `animation-name` property value will default to a random hash
* I recommend you always define a waypoint Object key as a percent String value
* Unfortunately, right now you cannot use the [`media`](../media/general.md#basic){: .pjax} feature inside `animation`
    - To get around this limitation, you can place `animation` inside of `media`(i.e., the other way around)

<div class="cf"></div>
<div class="end"></div>

