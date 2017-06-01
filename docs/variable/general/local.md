# Local
<div class="te-verified"></div>

__Description__: Local variables are defined in the root of the `ctr` instance or class through an Object key of `$$`. Variables in the `$$` Object are declared in key-value pair fashion and their value can be a String, Object, List, or a Literal. To reference a local variable, the absolute variable path relative to the `$$` Object is specified as a String wrapped in dollar signs as such: `'$<path>.<to>.<varible>$'`.

{!variable/general/_code/private.code.md!}
{!variable/general/_code/private.fixture.md!}

__Notes__

+ Local variables always supersede global variables
+ On the surface level, local variables keep your code extremely DRY, but where they really shine is within a `ctr` [`class`](./../class/general.md){: .pjax} instance

<div class="cf"></div>
<div class="end"></div>

