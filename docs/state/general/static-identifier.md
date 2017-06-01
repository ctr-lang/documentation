# Static Identifier

__Description__: Any `state` `<identifier>` defined in [global option](./../basic/global-option.md){: .pjax} `stateOmitList` is considered a static `<identifier>` and no transition properties are generated for the enclosed CSS.

{!state/general/_code/static-identifier.code.md!}
{!state/general/_code/static-identifier.fixture.md!}

__Notes__

+ Default `stateOmitList`: `link`, `optional`, `required`, and `valid`
+ This behavior can also be altered locally through the [`autoGen`](./../state/specific-option.md#autogen){: .pjax} `option` property

<div class="cf"></div>
<div class="end"></div>
