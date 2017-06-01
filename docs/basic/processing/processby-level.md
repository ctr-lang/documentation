# processBy Level

__Description__: The default `processBy` order is by `level` to process the `ctr` instance by the Object scrope level or in other words how deep the style is nested within the instance itself. That is to say, the `ctr` instance is processed in a Object scope fashion that proceduce selectors whose selectivity is cascading by nature.


{!basic/processing/_code/processby-level.code.md!}
{!basic/processing/_code/processby-level.fixture.md!}


__Notes__

+ For a whole slew of reasons processing my level is adventagous
    * The cheif benifit is there is little to no need to heed the order of any feature, you can go willy nilly and ctr will take care of you
    * Media query specifity is ensured and quene last to help you sleep at night
+ While it may seem a bit unintuitive to process the `ctr` instance the Object scope you just have to have a little fath and trust me on that it's in your best intrest


<div class="cf"></div>
<div class="end"></div>
