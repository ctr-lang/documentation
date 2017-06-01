<div data-size="390" class="code-cont" data-example="true-value">
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


<div data-size="390" data-examples="stylus"></div>
```styl
ctr('.test > div', {
  width: 200px
  attributes: {
    common: {
      option: {
        key: 'class*'
      }
      font-size: 2em
      height: 400px
    }
    one: {
      opacity: 1
    }
    // inherits common
    two: true
  }
})
```

<div data-size="390" data-examples="yaml"></div>
```yaml
.test > div:
  width: 200px
  attributes:
    common:
      option:
        key: class*
      font-size: 2em
      height: 400px
    one:
      opacity: 1
    # inherits common
    two: true
```

```css
.test > div {
  width: 200px;
}
.test > div[class*="one"] {
  opacity: 1;
  height: 400px;
  font-size: 2em;
}
.test > div[class*="two"] {
  height: 400px;
  font-size: 2em;
}
```
<div class="cf"></div>
