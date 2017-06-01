<div data-size="375" class="code-cont" data-example="basic">
    <div class="code">
        <div class="code-wrap">
            <textarea id="stylus"></textarea>
            <textarea id="css"></textarea>
            <div class="edit-code">
                <span>Edit</span>
            </div>
        </div>
    </div>
</div>

<div data-size="375" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  animation: {
    // name will be picked up from shorthand key
    shorthand: {
      // <identifier>: duration delay ease count dir mode state
      jiving: 1s default ease-in 5 reverse both paused
    }
    timeline: {
      '50%': {
        background: teal
      }
    }
  }
})
```

<div data-size="375" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  animation:
    # name will be picked up from shorthand key
    shorthand:
      # <identifier>: [duration, delay, ease, count, dir, mode, state]
      jiving: [1s, default, ease-in, 5, reverse, both, paused]
    timeline:
      50%:
        background: teal
```

```css
.test {
  width: 200px;
  animation-delay: 0s;
  animation-duration: 1s;
  animation-name: jiving;
  animation-fill-mode: both;
  animation-play-state: paused;
  animation-direction: reverse;
  animation-iteration-count: 5;
  animation-timing-function: ease-in;
}
@keyframes jiving {
  50% {
    background: #008080;
  }
}
```
<div class="cf"></div>
