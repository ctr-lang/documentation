<div data-size="425" class="code-cont" data-example="global-shorthand">
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
      height: 400px
      opacity: 1
    }
    non: {
      height: 200px
      opacity: 0.5
    }
    shorthand: {
      height: 1s 1s 'ease-in'
      opacity: 2s 2s 'ease-out'
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
      height: 400px
      opacity: 1
    non:
      height: 200px
      opacity: 0.5
    shorthand:
      height: [1s, 1s, ease-in]
      opacity: [2s, 2s, ease-out]
```

```css
.test {
  width: 200px;
}
.test:hover {
  opacity: 1;
  height: 400px;
  transition-delay: 1s, 2s;
  transition-duration: 1s, 2s;
  transition-property: height, opacity;
  transition-timing-function: ease-in, ease-out;
}
.test:not(:hover) {
  opacity: 0.5;
  height: 200px;
  transition-delay: 1s, 2s;
  transition-duration: 1s, 2s;
  transition-property: height, opacity;
  transition-timing-function: ease-in, ease-out;
}
```
<div class="cf"></div>
