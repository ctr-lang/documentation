<div data-size="325" class="code-cont" data-example="gutter-B">
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
    // no gutter
    // fraction cycle gutter flex
    column: '1/3' default 0
  }
})
```

<div data-size="325" data-examples="yaml"></div>
```yaml
# shorthand
.test:
  grid:
    # no gutter
    # fraction cycle gutter flex
    column: [1/3, default, 0]
```

```css
.test {
  flex: 0 0 auto;
  width: calc(99.9% * 1 / 3);
}
.test:nth-child(1n) {
  margin-right: 0;
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
