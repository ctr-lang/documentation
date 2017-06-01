<div data-size="325" class="code-cont" data-example="multiple-key-merge">
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


<div data-size="325" data-examples="stylus"></div>
```styl
ctr('.test > div', {
  width: 200px
  customAttr: {
    key: '[class*="bathtub"]' '[class^="gin"]' '[title~="isin"]'
    font-size: 2em
  }
  'attr-class*="bathtub"': {
    color: red
  }
  'attr-class^="gin"': {
    color: black
  }
})
```

<div data-size="325" data-examples="yaml"></div>
```yaml
.test > div:
  width: 200px
  customAttr:
    key: ['[class*="bathtub"]', '[class^="gin"]', '[title~="isin"]']
    font-size: 2em
  attr-class*="bathtub":
    color: red
  attr-class^="gin":
    color: black
```

```css
.test > div {
  width: 200px;
}
.test > div[class*="bathtub"] {
  color: #f00;
  font-size: 2em;
}
.test > div[class^="gin"] {
  color: #000;
  font-size: 2em;
}
.test > div[title~="isin"] {
  font-size: 2em;
}
```
<div class="cf"></div>
