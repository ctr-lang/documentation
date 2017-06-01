# Basic

__Description__: The `attribute` Object creates an attribute selector for the `<identifier>` at the scope level it is defined.

{!attribute/general/_code/basic.code.md!}
{!attribute/general/_code/basic.fixture.md!}

__Notes__

+ `attribute` alias: `attr`
+ The `key` property can be defined inside or outside the `option` Object
+ Attribute examples
    * `span[lang]` <span data-offset="6.5" data-tooltip='Targets all spans with a "lang" attribute' class="icon info"></span>
    * `a[href^="#"]` <span data-offset="7.5" data-tooltip="Targets all internal links" class="icon info"></span>
    * `div[class^="main"]` <span data-offset="10.5" data-tooltip='Targets all divs whose first declared class begins with "main"' class="icon info"></span>
    * `input[type="email" i]` <span data-offset="12" data-tooltip='Targets all email inputs' class="icon info"></span>

<div class="cf"></div>
<div class="end"></div>

