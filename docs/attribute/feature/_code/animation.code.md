<div data-size="425" class="code-cont" data-example="animation">
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
ctr('.test > div', {
  width: 200px
  attribute: {
    key: '[data-role="test"]'
    color: red
    // animation
    animation: {
      name: 'test'
      timeline: {
        '50': {
          font-size: 10px
        }
      }
    }
  }
})
```

<div data-size="425" data-examples="yaml"></div>
```yaml
.test > div:
  width: 200px
  attribute:
    key: '[data-role="test"]'
    color: red
    # animation
    animation:
      name: test
      timeline:
        50:
          font-size: 10px
```

```css
.test > div {
  width: 200px;
}
.test > div[data-role="test"] {
  color: #f00;
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
  50% {
    font-size: 10px;
  }
}
```
<div class="cf"></div>
