# Query Helpers

__Description__: Predefined media query values defined in the global options can be used as variable values in the `query` Object.

{!media/general/_code/query-helpers-A.code.md!}
{!media/general/_code/query-helpers-A.fixture.md!}

{!media/general/_code/query-helpers-B.code.md!}
{!media/general/_code/query-helpers-B.fixture.md!}

__Notes__

+ Default `media` query helpers which are set in the [global options](./../basic/global-option.md){: .pjax}
    - `xs` <span data-nbsp="3"></span> === <span data-nbsp="3"></span> `400px`
    - `sm` <span data-nbsp="3"></span> === <span data-nbsp="3"></span> `600px`
    - `md` <span data-nbsp="3"></span> === <span data-nbsp="3"></span> `800px`
    - `lg` <span data-nbsp="3"></span> === <span data-nbsp="3"></span> `1050px`
    - `hd` <span data-nbsp="3"></span> === <span data-nbsp="3"></span> `1800px`
+ Condition: If the `window` `width` is less than `<query:helper>`, then the `background` of `.test` is `red`

<div class="cf"></div>
<div class="end-last"></div>

