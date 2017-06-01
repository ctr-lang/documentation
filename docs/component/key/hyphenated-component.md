# Hyphenated Component
<div class="te-verified"></div>

__Description__: A `component` `<identifier>` can be defined through a hyphenated Object key that matches `component-<identifier>` or `comp-<identifier>`. 

{!component/key/_code/hyphenated-component.code.md!}
{!component/key/_code/hyphenated-component.fixture.md!}

__Notes__

+ Regex match: `/^component-|^comp-/i`
+ For reference, the `component-` or `comp-` part of the Object key is removed and what is remaining will be used as the `<identifier>`
+ A `key` value supersedes the hyphenated value

<div class="cf"></div>
<div class="end"></div>

