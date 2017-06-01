<div data-size="325" class="code-cont" data-example="fraction-A">
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


<div data-size="325" data-examples="stylus"></div>
```styl
ctr('.test', {
  grid: {
    column: {
      fraction: '1/3'
    }
  }
})
```

<div data-size="325" data-examples="yaml"></div>
```yaml
.test:
  grid:
    column:
      fraction: 1/3
```

```css
.test {
  flex: 0 0 auto;
  width: calc(99.9% * 1 / 3 - (30px - 30px * 1 / 3));
}
.test:nth-child(1n) {
  margin-right: 30px;
}
.test:last-child {
  margin-right: 0;
}
.test:nth-child(3n) {
  float: right;
  margin-right: 0;
}
```
<div class="cf"></div>
