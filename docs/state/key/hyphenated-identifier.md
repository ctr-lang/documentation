# Hyphenated Identifier

__Description__: A `state` `<identifier>` and its auxiliary state can be defined through a hyphenated Object key that matches `<identifier>-<auxiliary>`. 

{!state/key/_code/hyphenated-identifier.code.md!}
{!state/key/_code/hyphenated-identifier.fixture.md!}

__Notes__

+ Regex: `^hover-|^focus-|^active-|^checked-|^link-|^visited-|^valid-|^required-|^out-of-range-|^optional-|^invalid-|^in-range-|^enabled-|^disabled-/i`
+ A `key` value supersedes the hyphenated value
+ Auxiliary states: `on`, `non`, `common`, and `static`

<div class="cf"></div>
<div class="end"></div>

