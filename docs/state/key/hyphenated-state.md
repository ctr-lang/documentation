# Hyphenated State

__Description__: A `state` `<identifier>` can be defined through a hyphenated Object key that matches `state-<identifier>`. 

{!state/key/_code/hyphenated-state.code.md!}
{!state/key/_code/hyphenated-state.fixture.md!}

__Notes__

+ Regex match: `/^state-/i`
+ A `key` value supersedes the hyphenated value
+ For reference, the `state-` part of the Object key is removed and what is remaining will be used as the `<identifier>`

<div class="cf"></div>
<div class="end"></div>

