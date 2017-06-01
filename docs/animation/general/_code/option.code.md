<div data-size="600" class="code-cont" data-example="option">
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

<div data-size="600" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  animation: {
    option: {
      name: 'test'
      // animation-delay
      delay: 100s
      // animation-duration
      duration: 200s
      // animation-direction
      direction: normal
      // animation-play-state
      state: paused
      // animation-fill-mode
      mode: forwards
      // animation-iteration-count
      count: 420
      // animation-timing-function
      ease: ease-out
    }
    timeline: {
      '50%': {
        width: 400px
      }
    }
  }
})
```

<div data-size="600" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  animation:
    option:
      name: test
      # animation-delay
      delay: 100s
      # animation-duration
      duration: 200s
      # animation-direction
      direction: normal
      # animation-play-state
      state: paused
      # animation-fill-mode
      mode: forwards
      # animation-iteration-count
      count: 420
      # animation-timing-function
      ease: ease-out
    timeline:
      50%:
        width: 400px
```

```css
.test {
  width: 200px;
  animation-name: test;
  animation-delay: 100s;
  animation-duration: 200s;
  animation-direction: normal;
  animation-play-state: paused;
  animation-fill-mode: forwards;
  animation-iteration-count: 420;
  animation-timing-function: ease-out;
}
@keyframes test {
  50% {
    width: 400px;
  }
}
```
<div class="cf"></div>
