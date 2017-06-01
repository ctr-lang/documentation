<div data-size="250" class="code-cont" data-example="reset-B">
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
    align: 'reset' false
  }
})
```

<div data-size="250" data-examples="yaml"></div>
```yaml
# non-flex
.test:
  grid:
    align: [reset, false]
```

```css
.test {
  position: static;
}
.test > * {
  top: auto;
  left: auto;
  right: auto;
  bottom: auto;
  position: static;
  transform: translate(0, 0);
}
```
<div class="cf"></div>
