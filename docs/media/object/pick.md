# Pick

__Description__: A List value for the `pick` `option` property in an Object `media` instance picks specific `common` values to be merged into the instance. The `pick` value is defined by the property path relative to the `common` Object.

{!media/object/_code/pick.code.md!}
{!media/object/_code/pick.fixture.md!}

__Notes__

+ Only `pick` values are merged and all other values are excluded
+ Conversely, the [`omit`](../media/object.md#omit){: .pjax} `option` property is the inverse, in that only `omit` values are exculed from the merge
+ Lookup is performed through the lodash [`_.get`](https://lodash.com/docs/4.17.2#get) Function via dot notation: `<path>.<to>.<pick>.<property>`

<div class="cf"></div>
<div class="end"></div>

