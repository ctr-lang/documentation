<div data-size="420" class="code-cont" data-example="pick">
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


<div data-size="420" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  nons: {
    common: {
      font-size: 2em
      height: 400px
    }
    '.one': {
      opacity: 1
    }
    '.two': {
      option: {
        // only picks height
        pick: 'height'
      }
      opacity: 0.5
    }
  }
})
```

<div data-size="420" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  nons:
    common:
      font-size: 2em
      height: 400px
    .one:
      opacity: 1
    .two:
      option:
        # only picks height
        pick: height
      opacity: 0.5
```

```css
.test {
  width: 200px;
}
.test:not(.one) {
  opacity: 1;
  height: 400px;
  font-size: 2em;
}
.test:not(.two) {
  opacity: 0.5;
  height: 400px;
}
```
<div class="cf"></div>
