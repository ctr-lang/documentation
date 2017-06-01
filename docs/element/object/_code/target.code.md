<div data-size="460" class="code-cont" data-example="target">
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
      option: {
        // only merges with "after"
        target: 'after'
      }
      content: false
      position: absolute
      top: 0
    }
    before: {
      size: 100px
    }
    after: {
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
      option:
        # only merges with "after"
        target: after
      content: false
      position: absolute
      top: 0
    before:
      size: 100px
    after:
      size: 100px
      bottom: 0
```

```css
.test {
  width: 200px;
}
.test::before {
  width: 100px;
  height: 100px;
}
.test::after {
  top: 0;
  bottom: 0;
  width: 100px;
  content: "";
  height: 100px;
  position: absolute;
}
```
<div class="cf"></div>
