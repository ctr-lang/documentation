# Common Key

__Description__: A `common` Object can be defined in the `attributes` Object to specify common values used by all `attribute` instances.

{!attribute/object/_code/common-key.code.md!}
{!attribute/object/_code/common-key.fixture.md!}

__Notes__

+ `common` alias: `global`
+ If you want to specify a `key` property in the `common` Object, it must be defined in the `option` Object
+ The `common` Object is deep merged into each `attribute` instance

<div class="cf"></div>
<div class="end"></div>

