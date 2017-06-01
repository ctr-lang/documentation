<div data-size="400" class="code-cont" data-example="code">
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
ctr('.test', {
  width: 200px
  non: {
    key: '.bad'
    height: 200px
    // grid
    grid: {
      column: '1/3'
    }
  }
})
```

<div data-size="400" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  non:
    key: .bad
    height: 200px
    # grid
    grid:
      column: 1/3
```

```css
.test {
  width: 200px;
}
.test:not(.bad) {
  height: 200px;
  flex: 0 0 auto;
  width: calc(99.9% * 1 / 3 - (30px - 30px * 1 / 3));
}
.test:not(.bad):nth-child(1n) {
  margin-right: 30px;
}
.test:not(.bad):last-child {
  margin-right: 0;
}
.test:not(.bad):nth-child(3n) {
  float: right;
  margin-right: 0;
}
```
<div class="cf"></div>
