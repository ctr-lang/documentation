<div data-size="425" class="code-cont" data-example="with-option-values">
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

<div data-size="425" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  animation: {
    option: {
      state: paused
      delay: 2s
      shorthand: {
        // default keyword inherit the
        // parent option above or global
        kool: 1s default ease-in 5
      }
    }
    timeline: {
      '50%': {
        background: teal
      }
    }
  }
})
```

<div data-size="425" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  animation:
    option:
      state: paused
      delay: 2s
      shorthand:
        # default keyword inherit the
        # parent option above or global
        kool: [1s, default, ease-in, 5]
    timeline:
      50%:
        background: teal
```

```css
.test {
  width: 200px;
  animation-delay: 2s;
  animation-name: kool;
  animation-duration: 1s;
  animation-fill-mode: none;
  animation-direction: normal;
  animation-play-state: paused;
  animation-iteration-count: 5;
  animation-timing-function: ease-in;
}
@keyframes kool {
  50% {
    background: #008080;
  }
}
```
<div class="cf"></div>
