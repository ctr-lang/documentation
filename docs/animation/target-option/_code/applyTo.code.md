<div data-size="300" class="code-cont" data-example="applyTo">
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

<div data-size="300" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  animation: {
    option: {
      applyTo: span
    }
    timeline: 'applyToTest'
  }
})
```

<div data-size="300" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  animation:
    option:
      applyTo: span
    timeline: applyToTest
```

```css
.test {
  width: 200px;
}
.test span {
  animation-delay: 0s;
  animation-duration: 0.5s;
  animation-fill-mode: none;
  animation-name: applyToTest;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
