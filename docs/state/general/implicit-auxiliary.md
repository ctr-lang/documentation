# Implicit Auxiliary

__Description__: A `state` Object absent an auxiliary state such as `on`, `non`, or `static` is an implicit `state`. An implicit `state` creates a pseudo-class condition for the `<identifier>` and transition properties for the enclosed CSS as well as a negation condition absent of the raw CSS for the `<identifier>` at the scope level it is defined.

{!state/general/_code/implicit-auxiliary.code.md!}
{!state/general/_code/implicit-auxiliary.fixture.md!}

__Notes__

+ I always recommend you use the explicit syntax when you can, however, this notation can come handy in various use cases

<div class="cf"></div>
<div class="end-last"></div>

