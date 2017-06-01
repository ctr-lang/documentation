# Usage

__Description__: Predefined `state` transitions can be declared in the `state` Object using the `preset` key with a String value that corresponds to the preset list below.

{!state/hover.css/_code/usage.code.md!}
{!state/hover.css/_code/usage.fixture.md!}

__Notes__

+ Where is the rest of the hover.css library?
    * Answer one, I ran out of steam due to the mind-numbing tedium of the process
    * Answer two, hardcoding these types of libraries into the core of `ctr` is a shitty design implementation and with the rewrite there will be a much more flexible and extensible solution
+ Attribution: [hover.css](http://ianlunn.github.io/Hover/) — creator [Ian Lunn](http://ianlunn.co.uk/)
+ <b class="important-text">NOTICE</b>: When I integrated hover.css pre `2.2.0` it was license under the MIT license, although, that has changed and now it's licensed under a UpLabs commercial license. As such hover.css will not be included in future releases, however, it will be replaced with a better alternative Open Source solution.
    * Looking for an Open Source project idea to create, wink wink

<div class="cf"></div>

__Preset List__

<table class="billiard-table">
    <tbody>
      <tr>
        <td><code>bob</code></td>
        <td><code>bounceIn</code></td>
        <td><code>bounceOut</code></td>
        <td><code>buzz</code></td>
      </tr>
      <tr>
        <td><code>buzzOut</code></td>
        <td><code>float</code></td>
        <td><code>grow</code></td>
        <td><code>growRotate</code></td>
      </tr>
      <tr>
        <td><code>hang</code></td>
        <td><code>pop</code></td>
        <td><code>pulse</code></td>
        <td><code>pulseGrow</code></td>
      </tr>
      <tr>
        <td><code>pulseShrink</code></td>
        <td><code>push</code></td>
        <td><code>rotate</code></td>
        <td><code>shrink</code></td>
      </tr>
      <tr>
        <td><code>sink</code></td>
        <td><code>skew</code></td>
        <td><code>skewBackward</code></td>
        <td><code>skewFoward</code></td>
      </tr>
      <tr>
        <td><code>wobbleBottom</code></td>
        <td><code>wobbleHorizontal</code></td>
        <td><code>wobbleSkew</code></td>
        <td><code>wobbleToBottomRight</code></td>
      </tr>
      <tr>
        <td><code>wobbleToTopRight</code></td>
        <td><code>wobbleTop</code></td>
        <td><code>wobbleVertical</code></td>
      </tr>
    </tbody>
</table>

<div class="cf"></div>
<div class="end"></div>

