# Basic

__Description__: A `ctrSetClass` instance creates an internal data reference to the `<class>` name. This `<class>` name can then be referenced in a `ctr` instance through the `extend` property to merge its data into the `ctr` instance at the scope level it is defined.

{!class/general/_code/basic.code.md!}
{!class/general/_code/basic.fixture.md!}

__Notes__

+ Classes can only be used after their declaration
+ Class data is deep merged into the `ctr` instance
+ Source data always supersedes class data
+ Don't overthink it

<div class="cf"></div>
<div class="end"></div>

