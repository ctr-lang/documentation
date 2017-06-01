# Sort Order

__Description__: By default the sort order for the compiled `ctr` CSS is by length; however, this could prove to be problematic. So it is worth mentioning early on that the sort order can easily be changed via the `global` `sort` `option` property in the [Global Option](../basic/global-option.md){: .pjax} ([`ctrSetOption`](../helpers/set.md#ctrsetoption){: .pjax}), [`.ctrrc.yml`](../helpers/dot-ctrrc.md){: .pjax}, or on an individual `ctr` instance basis. 


{!basic/processing/_code/sort-order.code.md!}
{!basic/processing/_code/sort-order.fixture.md!}


__Notes__

+ Possible sort values
    - `'len'` <span data-nbsp="12"></span><span class="arr-i"></span> ascending length sort order: a.k.a — shortest first
    - `'-len'` <span data-nbsp="3"></span><span class="arr-i"></span> descending length sort order: a.k.a — longest first
    - `'abc'`  <span data-nbsp="12"></span><span class="arr-i"></span> ascending alphabetical order: a.k.a — `a` comes first
    - `'-abc'` <span data-nbsp="3"></span><span class="arr-i"></span> descending alphabetical order: a.k.a — `z` comes first and `i` before `e`
    - `false` <span data-nbsp="11"></span><span class="arr-i"></span> Preserve sort order: a.k.a — don't sort
+ The reason the sort order is by length is that it makes testing easier, it's prettier, it makes you look kooler, plus my brain finds it easier

<div class="cf"></div>
<div class="end-last"></div>

