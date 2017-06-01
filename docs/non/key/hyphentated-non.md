# Hyphentated Non
<div class="te-verified"></div>

__Description__: A `non` `<identifier>` can be defined through a hyphenated Object key that matches `non-<identifier>` or `not-<identifier>`

{!non/key/_code/hyphentated-non.code.md!}
{!non/key/_code/hyphentated-non.fixture.md!}

__Notes__

+ Regex match: `/^non-|^not-/i`
+ For reference, the `not-` or `non-` part of the Object key is removed and what is remaining will be used as the `<identifier>`
+ A `key` value supersedes the hyphenated value

<div class="cf"></div>
<div class="end"></div>

