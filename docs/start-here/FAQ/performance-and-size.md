# Performance & Size?

First off, to make sure we are on the same page, the goal of `ctr` is to create CSS faster and manage CSS complexity better. The raw performance and size of CSS will never be a primary goal of `ctr`, however, in future releases, I plan on adding some features to help reduce the raw CSS output size.

<div data-space="25"></div>

__Performance__

Once upon a time, there was cause to avoid deeply nested CSS [child selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_selectors) due to performance concerns. Along the following lines:

`.peopleOn > .theInternet > .willTell > .youTo > .neverMake > .aSelectorLikeThis`

Well, I have good news it's no longer 2008, and this argument is no longer relevant like `<blink>` — shoots fired. Want proof, check out the tests below.

<div data-space="15"></div>

+ [`a`](http://stevesouders.com/efws/css-selectors/csscreate.php?n=1000&sel=a+&body=background%3A+%23EFA&ne=1000) <span class="arr-i"></span> 1,000 targets
+ [`a`](http://stevesouders.com/efws/css-selectors/csscreate.php?n=10000&sel=a+&body=background%3A+%23EFA&ne=10000) <span class="arr-i"></span> 10,000 targets
+ [`a`](http://stevesouders.com/efws/css-selectors/csscreate.php?n=100000&sel=a+&body=background%3A+%23EFA&ne=100000) <span class="arr-i"></span> 100,000 targets
+ [`div > div > div > div > a`](http://stevesouders.com/efws/css-selectors/csscreate.php?n=1000&sel=div+%3E+div+%3E+div+%3E+div+%3E+a+&body=background%3A+%23EFA&ne=1000) <span class="arr-i"></span> 1,000 targets
+ [`div > div > div > div > a`](http://stevesouders.com/efws/css-selectors/csscreate.php?n=10000&sel=div+%3E+div+%3E+div+%3E+div+%3E+a+&body=background%3A+%23EFA&ne=10000) <span class="arr-i"></span> 10,000 targets
+ [`div > div > div > div > a`](http://stevesouders.com/efws/css-selectors/csscreate.php?n=100000&sel=div+%3E+div+%3E+div+%3E+div+%3E+a+&body=background%3A+%23EFA&ne=100000) <span class="arr-i"></span> 100,000 targets

However, as you'll notice the more targets, the greater the performance difference between the two selectors. Rule of thumb is if you're creating a boat load of elements (+10,000) always use a single selector. In the same breath, deeply nested CSS child selectors do create other side-effects. Chiefly, it increases the brittleness of the relationship between CSS and HTML. That is if you change your HTML you will have to change your `ctr` styles, but due to the Object tree data structure of `ctr`, it makes these changes trivial. In my opinion, child selectors are the most underrated feature in CSS hands down.

<div data-space="25"></div>

__Size__

There's no way around it, `ctr` will increase the size of your CSS if you use `ctr` how it's intented to be use — to created CSS faster. This is due to CSS duplication. That's not to say you can't use `ctr` in a manner that won't increase the size of your CSS, but it somewhat defeats the purpose. Personally, I used to be the “type” that did everything I could to save `25KB`, that is until I realized the fruitlessness of the endeavor in my context. Keyword — context. If I were working on an Amazon-like-traffic website and had optimized everything else, CND’s, HTTP/2, GZip, etc., then saving `25KB` in CSS would be on my list of optimizations, given it makes `$` sense.

So the question becomes, do you value your time more than a few `KB`? If yes, then `ctr` is your answer. If no, let me remind you that you can't buy more time and we are all running out of the stuff. ☹

<div class="cf"></div>
<div class="end"></div>




