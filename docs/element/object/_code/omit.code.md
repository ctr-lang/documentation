<div data-size="460" class="code-cont" data-example="omit">
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


<div data-size="460" data-examples="stylus"></div>
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
    after: {
      option: {
        // omits top
        omit: 'top'
      }
      size: 100px
      bottom: 0
    }
  }
})
```

<div data-size="460" data-examples="yaml"></div>
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
    after:
      option:
        # omits top
        omit: top
      size: 100px
      bottom: 0
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
  bottom: 0;
  width: 100px;
  content: "";
  height: 100px;
  position: absolute;
}
```
<div class="cf"></div>
