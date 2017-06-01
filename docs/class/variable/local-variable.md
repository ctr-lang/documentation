# Local Variable

__Description__: If no [global variable](./../variable/general.md#global){: .pjax} is found, `<class>` variable reference lookup defers to the [local variable](./../variable/general.md#local){: .pjax} scope.

{!class/variable/_code/local-variable.code.md!}
{!class/variable/_code/local-variable.fixture.md!}

__Notes__

+ As I mentioned above in global variable, I recommend you use local variables as more or less default values with the intention of overwriting them with set global variables; if this is not the case, use [private variables](./../class/variable.md#private-variable){: .pjax}
+ Priority: `extend variable > private variable > global variable > local variable`
+ Object lookup is performed through lodash's [`_.get`](https://lodash.com/docs/4.17.2#get) Function using dot notation: `$<path>.<to>.<var>$`

<div class="cf"></div>
<div class="end"></div>

