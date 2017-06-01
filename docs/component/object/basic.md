# Basic

__Description__: The `components` Object groups `component` instances together in which each child Object is treated as a separate `component` instance. If the `key` property is not defined in the `component` instance, its Object key is used as the `<identifier>`.

{!component/object/_code/basic.code.md!}
{!component/object/_code/basic.fixture.md!}

__Notes__

+ In the `components` Object, you cannot use any `ctr` reserved keys that are not `component` related, such as `hover`, `animation`, etc.

<div class="cf"></div>
<div class="end"></div>

