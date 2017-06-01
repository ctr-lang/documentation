<div data-size="340" class="code-cont" data-example="custom-element">
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


<div data-size="340" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  customElement: {
    option: {
      key: 'first-line'
    }
    font-size: 1em
  }
  customEl-YOLO: {
    option: {
      key: 'lang(es)'
    }
    font-size: 2em
  }
})
```

<div data-size="340" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  customElement:
    option:
      key: first-line
    font-size: 1em
  customEl-YOLO:
    option:
      key: lang(es)
    font-size: 2em
```

```css
.test {
  width: 200px;
}
.test::first-line {
  font-size: 1em;
}
.test:lang(es) {
  font-size: 2em;
}
```
<div class="cf"></div>
