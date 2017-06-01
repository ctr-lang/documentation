<div data-size="440" class="code-cont" data-example="target">
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


<div data-size="440" data-examples="stylus"></div>
```styl
ctr('.test > div', {
  width: 200px
  attributes: {
    common: {
      option: {
        key: 'class*'
        // only merges with "two"
        target: 'two'
      }
      font-size: 2em
      height: 400px
    }
    one: {
      opacity: 1
    }
    two: {
      opacity: 0.5
    }
  }
})
```

<div data-size="440" data-examples="yaml"></div>
```yaml
.test > div:
  width: 200px
  attributes:
    common:
      option:
        key: class*
        # only merges with "two"
        target: two
      font-size: 2em
      height: 400px
    one:
      opacity: 1
    two:
      opacity: 0.5
```

```css
.test > div {
  width: 200px;
}
.test > div[class*="one"] {
  opacity: 1;
}
.test > div[class*="two"] {
  opacity: 0.5;
  height: 400px;
  font-size: 2em;
}
```
<div class="cf"></div>
