# Option

__Description__: Default values can be changed globally and in individual `ctr` instances.

{!helpers/responsive-text/_code/option-A.code.md!}
{!helpers/responsive-text/_code/option-A.fixture.md!}

{!helpers/responsive-text/_code/option-B.code.md!}
{!helpers/responsive-text/_code/option-B.fixture.md!}

__Notes__

+ Set defaults can be changed locally or globally and camelCase is a must
    * `rootSize: 16px`
    * `fontSize`
        - `minSize: 12px`
        - `maxSize: 21px`
        - `minWidth: media[xs] === 400px`
        - `maxWidth: media[hd] === 1800px`
    * `lineHeight`
        - `minSize: 1rem`
        - `maxSize: 2rem`
        - `minWidth: media[xs] === 400px`
        - `maxWidth: media[hd] === 1800px`
    * `letterSpacing`
        - `minSize: 3px`
        - `maxSize: 10px`
        - `minWidth: media[xs] === 400px`
        - `maxWidth: media[hd] === 1800px`
+ Options can also be changed for both `line-height` and `letter-spacing`; I just omitted them for brevity

<div class="cf"></div>
<div class="end-last"></div>

