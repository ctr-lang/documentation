# Contrast

__Description__: Returns the [contrast ratio](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef) Object between `top` and `bottom` colors, based on [script](https://github.com/LeaVerou/contrast-ratio/blob/gh-pages/color.js#L108) underlying the “[contrast ratio](http://leaverou.github.io/contrast-ratio/)” tool by Lea Verou. The second argument is optional and defaults to `#fff`. The main key in the returned Object is `ratio`, it also has `min` and `max` values that are different from the `ratio` only when the `bottom` color is transparent. In that case, the `error` also contains an error margin.

{!basic/color-functions/_code/contrast.code.md!}
{!basic/color-functions/_code/contrast.fixture.md!}

__Notes__

+ `contrast(<top>)`
+ `contrast(<top>, <bottom>)`
+ Resulting Object properties
    * `ratio`
    * `error`
    * `min`
    * `max`
+ Sorry for the shit example

<div class="cf"></div>
<div class="end"></div>

