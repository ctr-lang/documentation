# Option

__Description__: An `option` Object in a `state`, `on`, `non`, or `common` Object alters the default transition values in the scope it is defined.

{!state/general/_code/option-A.code.md!}
{!state/general/_code/option-A.fixture.md!}

{!state/general/_code/option-B.code.md!}
{!state/general/_code/option-B.fixture.md!}

__Notes__

+ Option properties and the corresponding `transition` properties
    * `duration` <span data-nbsp="3"></span> === <span data-nbsp="3"></span> `transition-duration`
    * `delay` <span data-nbsp="27"></span> === <span data-nbsp="3"></span> `transition-delay`
    * `ease` <span data-nbsp="35"></span> === <span data-nbsp="3"></span> `transition-timing-function`
    * `property` <span data-nbsp="3"></span> === <span data-nbsp="3"></span> `transition-property`
+ Default option values
    * `duration` <span data-nbsp="3"></span> === <span data-nbsp="3"></span> `0.5s`
    * `delay` <span data-nbsp="27"></span> === <span data-nbsp="3"></span> `0s`
    * `ease` <span data-nbsp="35"></span> === <span data-nbsp="3"></span> `cubic-bezier(0.42, 0, 0.58, 1)`
    * `property` <span data-nbsp="3"></span> === <span data-nbsp="3"></span> If no value is specified properties are auto generated
+ You also can specify property-specific options using [`shorthand`](./../state/shorthand.md){: .pjax} - it's bomb-[dot]-com
+ If you need to, or prefer the `transition` shorthand properties syntax, as in `transtion: name | duration | timing-function | ...`, you can do so through the [`transitionShorthand`](../state/specific-option.md#shorthand-properties){: .pjax} option


<div class="cf"></div>
<div class="end"></div>

