<div data-size="250" class="code-cont" data-example="top-right-B">
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


<div data-size="250" data-examples="stylus"></div>
```styl
// non-flex
ctr('.test', {
  grid: {
    align: 'top-right' false
  }
})
```

<div data-size="250" data-examples="yaml"></div>
```yaml
# non-flex
.test:
  grid:
    align: [top-right, false]
```

```css
.test {
  position: relative;
}
.test > * {
  top: 0;
  right: 0;
  left: auto;
  bottom: auto;
  position: absolute;
  transform: translate(0, 0);
}
```
<div class="cf"></div>
