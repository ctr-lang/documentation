# Syntax

__Description__: `ctrSetClass` and `CtrClass` is defined as a method to create a `<class>` instance of predefined `ctr` styles.

{!class/general/_code/syntax-A.syntax.md!}
{!class/general/_code/syntax-B.syntax.md!}

__Notes__

+ Da bomb-dot-com of `ctr` features
+ Both syntaxes achieve the same result in Stylus
+ Longhand syntax is intended to be used in combination with [`variable`](./../class/variable.md){: .pjax}
+ Under the hood, a `<class>` is exactly like a normal `ctr` instance with some small behavoir alterations
    - To make a relatable comparison, you can think of a normal `ctr` instance like an immediately invoked function and a `<class>` as a Function declaration that is only invoked when inside a `ctr` instance
+ I recommend using `ctrSetClass` rather than using `CtrClass` due to the nature of Stylus global variable assignment
    - Additionally, the naming convention of `ctrSetClass` is similar to that of YAML and Javascript

<div class="cf"></div>
<div class="end"></div>

