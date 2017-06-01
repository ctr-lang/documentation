<div data-size="200" class="code-cont" data-example="fraction-B">
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
    // fraction gutter flex
    row: '1/5' 0.75vh
  }
})
```

<div data-size="200" data-examples="yaml"></div>
```yaml
# shorthand
.test:
  grid:
    # fraction gutter flex
    row: [1/5, 0.75vh]
```

```css
.test {
  width: 100%;
  flex: 0 0 auto;
  margin-bottom: 0.75vh;
  height: calc(99.9% * 1 / 5 - (0.75vh - 0.75vh * 1 / 5));
}
.test:last-child {
  margin-bottom: 0;
}
```
<div class="cf"></div>
