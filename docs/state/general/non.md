# Non

__Description__: A `non` Object in a `state` creates a negation pseudo-class condition for the `<identifier>` and transition properties for the enclosed CSS.

{!state/general/_code/non.code.md!}
{!state/general/_code/non.fixture.md!}

__Notes__

+ Think of a `non` Object like a feature unto itself in that it works with other features such as [`media`](./../media/general.md){: .pjax}, [`element`](./../element/general.md){: .pjax}, and the like
    * Underneath the hood of the `state`, `non` is masquerading as a context-aware [`non`](./../non/general.md){: .pjax} feature which will create transition properties

<div class="cf"></div>
<div class="end"></div>

