<div data-size="325" class="code-cont" data-example="two-five-column-A">
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
    // fraction cycle gutter flex
    column: '2/5'
  }
})
```

<div data-size="325" data-examples="yaml"></div>
```yaml
.test:
  grid:
    # fraction cycle gutter flex
    column: 2/5
```

```css
.test {
  flex: 0 0 auto;
  width: calc(99.9% * 2 / 5 - (30px - 30px * 2 / 5));
}
.test:nth-child(1n) {
  margin-right: 30px;
}
.test:last-child {
  margin-right: 0;
}
.test:nth-child(5n) {
  float: right;
  margin-right: 0;
}
```
<div class="cf"></div>
