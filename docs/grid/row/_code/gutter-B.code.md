<div data-size="200" class="code-cont" data-example="gutter-B">
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
// shorthand
ctr('.test', {
  grid: {
    // no gutter
    // fraction gutter flex
    row: '1/3' '0'
  }
})
```

<div data-size="200" data-examples="yaml"></div>
```yaml
# shorthand
.test:
  grid:
    # no gutter
    # fraction gutter flex
    row: [1/3, 0]
```

```css
.test {
  width: 100%;
  flex: 0 0 auto;
  margin-bottom: 0;
  height: calc(99.9% * 1 / 3);
}
.test:last-child {
  margin-bottom: 0;
}
```
<div class="cf"></div>
