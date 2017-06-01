<div data-size="200" class="code-cont" data-example="gutter-A">
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

<div data-size="200" data-examples="stylus"></div>
```styl
ctr('.test', {
  grid: {
    // fraction gutter flex
    row: {
      fraction: '1/3'
      gutter: 10px
    }
  }
})
```

<div data-size="200" data-examples="yaml"></div>
```yaml
.test:
  grid:
    # fraction gutter flex
    row:
      fraction: 1/3
      gutter: 10px
```

```css
.test {
  width: 100%;
  flex: 0 0 auto;
  margin-bottom: 10px;
  height: calc(99.9% * 1 / 3 - (10px - 10px * 1 / 3));
}
.test:last-child {
  margin-bottom: 0;
}
```
<div class="cf"></div>
