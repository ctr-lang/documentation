# Global Variable

__Description__: Variable reference lookup in a `<class>` defaults to the [global variable](./../variable/general.md#global){: .pjax} scope. If no reference is found, the lookup then defers to the [local variable](./../variable/general.md#local){: .pjax} scope.

{!class/variable/_code/global-variable.code.md!}
{!class/variable/_code/global-variable.fixture.md!}

__Notes__

+ The idea behind this behavior is to allow you to structure your classes to inherit set defaults, like primary colors, thus allowing for seamless class reuse between projects
    * Differs from `ctr` instances which do __not__ inherit global local variables
+ Global variables do not overwrite explicit local variables defined in the `extend` Object
+ If this behavior is unwelcomed, you can use local [private variables](./../class/variable.md#private-variable){: .pjax} whose value can only be overwritten explicitly and not globally
+ Priority: `extend variable > private variable > global variable > local variable`
+ Object lookup is performed through lodash's [`_.get`](https://lodash.com/docs/4.17.2#get) Function using dot notation: `$<path>.<to>.<var>$`

<div class="cf"></div>
<div class="end"></div>

