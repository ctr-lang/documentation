# Syntax

__Description__: A `ctr` variable is defined as a local or global variable that can be used in a `ctr` instance or class.

{!variable/general/_code/syntax-A.syntax.md!}
{!variable/general/_code/syntax-B.syntax.md!}

__Notes__

+ Variable lookup is performed through lodash's [`_.get`](https://lodash.com/docs/4.17.2#get) Function using dot notation: `$<path>.<to>.<var>$`
    - Alternative syntax: `$[<path>.<to>.<var>]$`
    - If and when to use the alternative syntax is completely up to you, but my rule of thumb is to use it with dot notation or when two variables are butting up against one another
+ Local and global variables can be used together and have a symbiotic relationship like electrons in a covalent bond in which `ctr` is the atom

<div class="cf"></div>
<div class="end"></div>

