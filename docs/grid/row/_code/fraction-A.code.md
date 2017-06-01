<div data-size="200" class="code-cont" data-example="fraction-A">
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
      gutter: 0.75vh
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
      gutter: 0.75vh
```

```css
.test {
  width: 100%;
  flex: 0 0 auto;
  margin-bottom: 0.75vh;
  height: calc(99.9% * 1 / 3 - (0.75vh - 0.75vh * 1 / 3));
}
.test:last-child {
  margin-bottom: 0;
}
```
<div class="cf"></div>
