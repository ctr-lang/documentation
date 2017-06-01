# Hyphenated Key

__Description__: An `animation` `<identifier>` can be defined through a hyphenated Object key that matches `animation-<identifier>` or `anim-<identifier>`.

{!animation/key/_code/hyphenated-key.code.md!}
{!animation/key/_code/hyphenated-key.fixture.md!}

__Notes__

+ Regex match: `/^anim-|^animation-/i`
+ For reference, the `anim-` or `animation-` part of the Object key is removed and what is remaining will be used as the `<identifier>`
+ A `name` value supersedes the hyphenated value

<div class="cf"></div>
<div class="end"></div>

