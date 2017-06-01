<div data-size="360" class="code-cont" data-example="multiple-key-merge">
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


<div data-size="360" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  customElement: {
    key: 'before' 'after' 'first-child'
    position: absolute
  }
  before: {
    content: 'ctr'
    bottom: 0
  }
  after: {
    content: 'test'
    top: 0
  }
})
```

<div data-size="360" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  customElement:
    key: [before, after, first-child]
    position: absolute
  before:
    content: ctr
    bottom: 0
  after:
    content: test
    top: 0
```

```css
.test {
  width: 200px;
}
.test::before {
  bottom: 0;
  content: "ctr";
  position: absolute;
}
.test::after {
  top: 0;
  content: "test";
  position: absolute;
}
.test:first-child {
  position: absolute;
}
```
<div class="cf"></div>
