<div data-size="425" class="code-cont" data-example="basic">
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
  hover: {
    on: {
      opacity: 1
      shorthand: {
        // property: duration delay ease
        opacity: 2s 2s 'ease-out'
      }
    }
    non: {
      opacity: 0.5
      shorthand: {
        // property: duration delay ease
        opacity: 1s 1s 'ease-in'
      }
    }
  }
})
```

<div data-size="425" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  hover:
    on:
      opacity: 1
      shorthand:
        # property: [duration, delay, ease]
        opacity: [2s, 2s, ease-out]
    non:
      opacity: 0.5
      shorthand:
        # property: [duration, delay, ease]
        opacity: [1s, 1s, ease-in]
```

```css
.test {
  width: 200px;
}
.test:hover {
  opacity: 1;
  transition-delay: 2s;
  transition-duration: 2s;
  transition-property: opacity;
  transition-timing-function: ease-out;
}
.test:not(:hover) {
  opacity: 0.5;
  transition-delay: 1s;
  transition-duration: 1s;
  transition-property: opacity;
  transition-timing-function: ease-in;
}
```
<div class="cf"></div>
