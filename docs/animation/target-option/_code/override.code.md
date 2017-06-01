<div data-size="300" class="code-cont" data-example="override">
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
      override: '#override'
    }
    timeline: 'overrideTest'
  }
})
```

<div data-size="300" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  animation:
    option:
      override: '#override'
    timeline: overrideTest
```

```css
.test {
  width: 200px;
}
#override {
  animation-delay: 0s;
  animation-duration: 0.5s;
  animation-fill-mode: none;
  animation-direction: normal;
  animation-name: overrideTest;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
