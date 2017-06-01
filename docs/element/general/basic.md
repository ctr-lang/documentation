# Basic

__Description__: The `element` Object creates a pseudo-class or pseudo-element for the `<identifier>` at the scope level it is defined.

{!element/general/_code/basic.code.md!}
{!element/general/_code/basic.fixture.md!}

__Notes__

+ `element` alias: `elm`
+ The `key` property can be define inside or outside the `option` Object
+ Element examples
    + `.test::after` <span data-offset="7.5" data-tooltip='Represents a styleable child pseudo-element immediately after the originating element’s actual content' class="icon info"></span>
    + `.test::before` <span data-offset="8" data-tooltip='Represents a styleable child pseudo-element immediately before the originating element’s actual content' class="icon info"></span>
    + `.test:first-child` <span data-offset="10" data-tooltip='Selects the element that is the first child element of its parent.' class="icon info"></span>
    + `.test:only-of-type` <span data-offset="11" data-tooltip='Selects an element that has no siblings of the given type.' class="icon info"></span>
+ By default, the colon conforms to best practices, although, it can be changed via the [`colon`](./../element/specific-option.md#colon){: .pjax} option property
    * Unless you are forced to support the browser which must not be named this should not be an issue

<div class="cf"></div>
<div class="end-last"></div>

