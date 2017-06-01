# classLock

__Description__: For extra safety, the `classLock` option can be turned on to effectively lock all classes from being modified or overwritten during runtime development.

{!class/general/_code/classlock.code.md!}
{!class/general/_code/classlock.fixture.md!}

__Notes__

+ If the `classLock` option is turned on and you attempt to edit a class, `ctr` will throw you an error to tell you what's up
+ Option property: `classLock: ture`
    * As you would expect, the `classLock` option can also be set in the [`.ctrrc`](../helpers/dot-ctrrc.md){: .pjax}

<div class="cf"></div>
<div class="end-last"></div>

