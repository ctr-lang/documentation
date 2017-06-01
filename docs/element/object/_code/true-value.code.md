<div data-size="330" class="code-cont" data-example="true-value">
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


<div data-size="330" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  elements: {
    common: {
      content: false
      position: absolute
      top: 0
    }
    before: {
      size: 100px
    }
    // inherits common
    after: true
  }
})
```

<div data-size="330" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  elements:
    common:
      content: false
      position: absolute
      top: 0
    before:
      size: 100px
    # inherits common
    after: true
```

```css
.test {
  width: 200px;
}
.test::before {
  top: 0;
  width: 100px;
  content: "";
  height: 100px;
  position: absolute;
}
.test::after {
  top: 0;
  content: "";
  position: absolute;
}
```
<div class="cf"></div>
