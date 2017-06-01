# Basic

__Description__: A `ctr` instance creates valid CSS for the `<#selector>` from its second Object argument whose data is naked.

{!basic/general/_code/basic.code.md!}
{!basic/general/_code/basic.fixture.md!}

__Notes__

+ I use the term "naked" in the sense your key-value pairs should not include semicolons or commas
+ You can define your properties and values in String format
+ The `future-property` is to demonstrate that `ctr` can handle the future
+ At the heart of `ctr` is <a href="https://github.com/stylus/stylus" target="_blank">Stylus</a> and all Stylus parsing rules apply to `ctr` to a _large_ extent
    * Do not use commas, or semicolons
    * Avoid using [Operators](https://github.com/stylus/stylus/blob/dev/docs/operators.md) `! ~ + *` etc.
+ If you do run into an error, either Stylus or `ctr` will throw an error
    * Stylus error: Tend to be a bit cryptic, and it may or may not give you some useful info to work with. If it provides you with a useless error report some good old fashion wolf fence debugging does the trick effectively
    * `ctr` error: I have built a half-way decent error reporter that in all likelihood will tell you what the error is and how to fix it

<div class="cf"></div>
<div class="end"></div>

