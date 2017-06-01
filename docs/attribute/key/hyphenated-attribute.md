# Hyphenated Attribute

__Description__: An `attribute` `<identifier>` can be defined through a hyphenated Object key that matches `attribute-<identifier>` or `attr-<identifier>`. 

{!attribute/key/_code/hyphenated-attribute.code.md!}
{!attribute/key/_code/hyphenated-attribute.fixture.md!}

__Notes__

+ Regex match: `/^attribute-|^attr-/i`
+ For reference, the `attribute-` or `attr-` part of the Object key is removed and what is remaining will be used as the `<identifier>`
+ A `key` value supersedes the hyphenated value

<div class="cf"></div>
<div class="end"></div>

