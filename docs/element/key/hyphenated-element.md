# Hyphenated Element

__Description__: An `element` `<identifier>` can be defined through a hyphenated Object key that matches `element-<identifier>` or `elm-<identifier>`. 

{!element/key/_code/hyphenated-element.code.md!}
{!element/key/_code/hyphenated-element.fixture.md!}

__Notes__

+ Regex match: `/^element-|^elm-/i`
+ For reference, the `element-` or `elm-` part of the Object key is removed and what is remaining will be used as the `<identifier>`
+ A `key` value supersedes the hyphenated value

<div class="cf"></div>
<div class="end"></div>

