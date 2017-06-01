<div data-size="325" class="code-cont" data-example="fraction-B">
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
// shorthand
ctr('.test', {
  grid: {
    // fraction cycle gutter flex
    column: '1/6'
  }
})
```

<div data-size="325" data-examples="yaml"></div>
```yaml
# shorthand
.test:
  grid:
    # fraction cycle gutter flex
    column: 1/6
```

```css
.test {
  flex: 0 0 auto;
  width: calc(99.9% * 1 / 6 - (30px - 30px * 1 / 6));
}
.test:nth-child(1n) {
  margin-right: 30px;
}
.test:last-child {
  margin-right: 0;
}
.test:nth-child(6n) {
  float: right;
  margin-right: 0;
}
```
<div class="cf"></div>
