# Private Variable

__Description__: A private variable can __not__ be overwritten by a [global variable](./../variable/general.md#global){: .pjax}. The notation for a private variable is denoted by underscores as such: `_$<var>$_`.

{!class/variable/_code/private-variable.code.md!}
{!class/variable/_code/private-variable.fixture.md!}

__Notes__

+ Regex match: `/_\$([^ \s]*?)\$_/`
+ The idea behind this behavior is to allow you to create classes whose values have a single source of truth, which is ideal for classes you wish to release for public consumption (or if you work with a bunch of yahoos)
+ A private variable can still be overwritten explicitly through an `extend` Object
+ Priority: `extend variable > private variable > global variable > local variable`
+ Object lookup is performed through lodash's [`_.get`](https://lodash.com/docs/4.17.2#get) Function using dot notation: `$<path>.<to>.<var>$`

<div class="cf"></div>
<div class="end-last"></div>

