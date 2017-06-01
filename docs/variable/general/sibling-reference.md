# Sibling Reference

__Description__: Local variables can reference previously declared siblings.

{!variable/general/_code/sibling-reference.code.md!}
{!variable/general/_code/sibling-reference.fixture.md!}

__Notes__

+ The ability to reference previous sibling values is dependant on property order, which is a convoluted topic, but here is what you need to know:
    - Object order is not guaranteed, but in my opinion you can make the reasonable assumption that it is
        * I have never run into any issues, although, if particles can walk through walls, an incorrect Object order is bound to happen to someone, somewhere, at some point in time
        * If a reference value is not found, `ctr` will throw you a warning message which acts as a safety catch
    - Never use integer keys since they bubble to the top in ascending order
    - If you need to perform some advance wizardry, just use Javascript
+ Global option property: `global.variableUpdate`

<div class="cf"></div>
<div class="end"></div>

