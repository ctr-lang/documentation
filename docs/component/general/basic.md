# Basic

__Description__: The `component` Object creates a child `<combinator>` selector for the `<identifier>` at the scope level it is defined.

{!component/general/_code/basic.code.md!}
{!component/general/_code/basic.fixture.md!}

__Notes__

+ `component` alias: `comp`
+ The `key` property can be defined inside or outside the `option` Object
+ Component examples
    + `.test > span` <span data-offset="7.5" data-tooltip='Child selector: selects nodes that are direct children of the former specified element.' class="icon info"></span>
    + `.test + #id` <span data-offset="7" data-tooltip='General sibling selector: selects nodes that follow (not necessarily immediately) the former specified element, if both elements shared the same parent.' class="icon info"></span>
    + `.test ~ .class` <span data-offset="8.5" data-tooltip='Adjacent sibling selector: selects nodes that immediately follow the former specified element.' class="icon info"></span>
    + `.test  h3` <span data-offset="5.5" data-tooltip='Descendant selector: selects nodes that are children (not necessary direct children) of the former' class="icon info"></span>

<div class="cf"></div>
<div class="end"></div>

