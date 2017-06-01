<div data-size="400" class="code-cont" data-example="common-key">
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


<div data-size="400" data-examples="stylus"></div>
```styl
ctr('.test > div', {
  width: 200px
  attributes: {
    // merged into each attribute
    common: {
      option: {
        key: 'class*'
      }
      font-size: 2em
    }
    'te': {
      background: teal
    }
    'artisin': {
      background: red
    }
  }
})
```

<div data-size="400" data-examples="yaml"></div>
```yaml
.test > div:
  width: 200px
  attributes:
    # merged into each attribute
    common:
      option:
        key: class*
      font-size: 2em
    te:
      background: teal
    artisin:
      background: red
```

```css
.test > div {
  width: 200px;
}
.test > div[class*="te"] {
  font-size: 2em;
  background: #008080;
}
.test > div[class*="artisin"] {
  font-size: 2em;
  background: #f00;
}
```
<div class="cf"></div>
