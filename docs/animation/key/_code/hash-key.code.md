<div data-size="350" class="code-cont" data-example="hash-key">
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


<div data-size="350" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  animation: {
    option: {
      name: test__hash__
    }
    timeline: {
      '50%': {
        background: teal
      }
    }
  }
})
```

<div data-size="350" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  animation:
    option:
      name: test__hash__
    timeline:
      50%:
        background: teal
```

```css
.test {
  width: 200px;
  animation-delay: 0s;
  animation-duration: 0.5s;
  animation-fill-mode: none;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-name: test_fkqnt22ew;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
@keyframes test_fkqnt22ew {
  50% {
    background: #008080;
  }
}
```
<div class="cf"></div>
