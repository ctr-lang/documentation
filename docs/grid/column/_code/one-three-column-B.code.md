<div data-size="400" class="code-cont" data-example="one-three-column-B">
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
  grid: {
    // fraction cycle gutter flex
    column: '1/3' default default false
  }
})
```

<div data-size="400" data-examples="yaml"></div>
```yaml
.test:
  grid:
    # fraction cycle gutter flex
    column: [1/3, default, default, false]
```

```css
.test {
  width: calc(99.9% * 1 / 3 - (30px - 30px * 1 / 3));
}
.test:nth-child(1n) {
  clear: none;
  float: left;
  margin-right: 30px;
}
.test:last-child {
  margin-right: 0;
}
.test:nth-child(3n) {
  float: right;
  margin-right: 0;
}
.test:nth-child(3n+1) {
  clear: left;
}
```
<div class="cf"></div>
