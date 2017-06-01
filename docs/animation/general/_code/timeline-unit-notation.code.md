<div data-size="475" class="code-cont" data-example="timeline-unit-notation">
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


<div data-size="475" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  animation: {
    name: 'test'
    timeline: {
      // don't need the `%`
      '0': {
        font-size: 1em
      }
      '50%': {
        font-size: 1.5em
      }
      '100%': {
        font-size: 2em
      }
    }
  }
})
```

<div data-size="475" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  animation:
    name: test
    timeline:
      # dont need the `%`
      0:
        font-size: 1em
      50%:
        font-size: 1.5em
      100%:
        font-size: 2em
```

```css
.test {
  width: 200px;
  animation-delay: 0s;
  animation-name: test;
  animation-duration: 0.5s;
  animation-fill-mode: none;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
@keyframes test {
  0% {
    font-size: 1em;
  }
  50% {
    font-size: 1.5em;
  }
  100% {
    font-size: 2em;
  }
}
```
<div class="cf"></div>
