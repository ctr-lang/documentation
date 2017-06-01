# Key Modifier

__Description__: There are instances in CSS when it makes sense to have key duplication although this is problematic since key duplication in an Object is not possible. To solve this issue an Object key modifier can be used in the following fashion `<selector>:::<modifier>` and `ctr` will remove the modifier upon processing the style.

{!javascript/yaml/_code/key-modifier.code.md!}

__Notes__

+ I would shy away from using modifiers since they are more or less of an anti-pattern but follow your heart
+ Tests: [`__tests__/cases-styl-yml`](https://github.com/ctr-lang/ctr/tree/master/__tests__/cases-styl-yml) <span class="arr-i"></span> every `.yml` test in directory uses key modifers

<div class="cf"></div>
<div class="end"></div>

