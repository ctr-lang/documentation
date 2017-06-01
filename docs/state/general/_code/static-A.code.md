<div data-size="250" class="code-cont" data-example="static-A">
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

<div data-size="250" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  hover: {
    static: {
      opacity: 1
      height: 400px
    }
  }
})
```

<div data-size="250" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  hover:
    static:
      opacity: 1
      height: 400px
```

```css
.test {
  width: 200px;
}
.test:hover {
  opacity: 1;
  height: 400px;
}
.test:not(:hover) {
  opacity: 1;
  height: 400px;
}
```
<div class="cf"></div>
