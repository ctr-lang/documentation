# Data Structure

__Description__: The difference between data structures in Stylus compared to YAML is minuscule. There are three big tickets, comments, curly brackets, and Arrays.
<div data-space="25"></div>

__Comments__: A `#` in YAML denotes a comment compared to Stylus which uses `//`.

{!javascript/yaml/_code/data-structure-A.code.md!}

__Notes__

+ The biggest "gotcha" is __hex color codes__ which are parsed as comments to avoid this gotcha you must __stringify__ all hex color codes
<div class="cf" data-space="25"></div>

__Curly Brackets Omit__: Brackets can be omitted.

{!javascript/yaml/_code/data-structure-B.code.md!}

<div class="cf" data-space="25"></div>

__Curly Brackets Keep__: The conversion from Stylus is __not__ one to one, and the typical Javascript Object syntax conventions must be followed in YAML.

{!javascript/yaml/_code/data-structure-C.code.md!}

__Notes__

+ For monolithic styles, brackets can be advantageous
<div class="cf" data-space="25"></div>

__Arrays__: In Stylus Arrays are called Lists which allows for the omission of square brackets. However, this is not the case in YAML and to define an Array square brackets must be used.

{!javascript/yaml/_code/data-structure-D.code.md!}

<div class="cf"></div>
<div class="end"></div>

