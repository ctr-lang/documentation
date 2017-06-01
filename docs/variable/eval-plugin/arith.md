# Arith

__Description__: Inside the `eval` Object, basic arithmetic can be performed through an `arith` invocation.

{!variable/eval-plugin/_code/arith.code.md!}
{!variable/eval-plugin/_code/arith.fixture.md!}

__Notes__

+ Essentially, anything inside of `arith` will be calculated via the `eval()` Javascript Function
+ Any value inside of `arith` will be removed of any word character (regex removal: `\w+`)
+ Either you will see the immediate purpose of this feature or you won't, but do not worry, it will click in due time

<div class="cf"></div>
<div class="end"></div>

