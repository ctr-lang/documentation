# Imperative Invocation

The imperative invocation shines if you don’t want to drink all the `ctr` kool-aid or only intend to use it for specific features. For example, let’s say you only want to use `ctr` for animations, the imperative invocation method tailors to this use case because you can use it inline with the rest of your Stylus styles.


{!start-here/introduction/_code/imperative-invocation.code.md!}
{!start-here/introduction/_code/imperative-invocation.fixture.md!}

__Notes__

+ Only works in Stylus
+ I recommend you __not__ use this invocation unless it's warranted; that is to say, if you can construct your `ctr` instance using the declarative invocation don't use the imperative invocation
+ Due to the limiting nature of the browser the imperative method does not always compile correctly
    * I should note that the imperative method works flawlessly in node or at least I have yet to run into any issues

<div class="cf"></div>
<div class="end"></div>
