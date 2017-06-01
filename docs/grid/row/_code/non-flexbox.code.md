<div data-size="200" class="code-cont" data-example="non-flexbox">
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
    row: {
      fraction: '1/3'
      flex: false
    }
  }
})
```

<div data-size="200" data-examples="yaml"></div>
```yaml
.test:
  grid:
    row:
      fraction: 1/3
      flex: false
```

```css
.test {
  width: 100%;
  margin-bottom: 30px;
  height: calc(99.9% * 1 / 3 - (30px - 30px * 1 / 3));
}
.test:last-child {
  margin-bottom: 0;
}
```
<div class="cf"></div>
