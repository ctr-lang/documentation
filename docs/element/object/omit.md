# Omit

__Description__: A List value for the `omit` `option` property in an Object `element` instance omits specific `common` values from being merged into the instance. The `omit` value is defined by the property path relative to the `common` Object.

{!element/object/_code/omit.code.md!}
{!element/object/_code/omit.fixture.md!}

__Notes__

+ Only `omit` values are excluded
+ Conversely, the [`pick`](../element/object.md#pick){: .pjax} `option` property is the inverse, in that only `pick` values are merged
+ Lookup is performed through the lodash [`_.get`](https://lodash.com/docs/4.17.2#get) Function via dot notation: `<path>.<to>.<omit>.<property>`

<div class="cf"></div>
<div class="end"></div>

