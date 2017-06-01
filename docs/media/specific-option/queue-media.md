# queueMedia

__Description__: By default, all `media` queries are queued and rendered last at the scope level they are defined. Why? Well, it's not called __cascading__ style sheets for nothing. Hence, the `queueMedia` `option` property better ensures `media` queries work as expected.


{!media/specific-option/_code/queue-media.code.md!}
{!media/specific-option/_code/queue-media.fixture.md!}

__Notes__

+ The default value is `true`, and I recommend you not change this `option` unless you know what you're doing, and why you're doing it
+ Like most options, `queueMedia` can be set globally or on an instance basis

<div class="cf"></div>
<div class="end-last"></div>

