<div data-size="320" class="code-cont" data-example="multiple-key-merge">
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


<div data-size="320" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  customComp: {
    key: '#thanksFor' '.the' '.beer'
    font-size: 1em
  }
  'comp-#thanksFor': {
    color: red
  }
  'comp-.beer': {
    color: blue
  }
})
```

<div data-size="320" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  customComp:
    key: ['#thanksFor', .the, .beer]
    font-size: 1em
  comp-#thanksFor:
    color: red
  comp-.beer:
    color: blue
```

```css
.test {
  width: 200px;
}
.test > #thanksFor {
  color: #f00;
  font-size: 1em;
}
.test > .the {
  font-size: 1em;
}
.test > .beer {
  color: #00f;
  font-size: 1em;
}
```
<div class="cf"></div>
