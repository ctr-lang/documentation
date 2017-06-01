<div data-size="250" class="code-cont" data-example="step-option">
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

<div data-size="250" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  animation: {
    option: {
      ease: steps(5, start)
    }
    timeline: 'stepTest'
  }
})
```

<div data-size="250" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  animation:
    option:
      ease: steps(5, start)
    timeline: stepTest
```

```css
.test {
  width: 200px;
  animation-delay: 0s;
  animation-duration: 0.5s;
  animation-name: stepTest;
  animation-fill-mode: none;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: steps(5, start);
}
```
<div class="cf"></div>
