<div data-size="275" class="code-cont" data-example="center-B">
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



<div data-size="275" data-examples="stylus"></div>
```styl
// non-flexbox
ctr('.test', {
  grid: {
    center: 1140px 30px false
  }
})
```

<div data-size="275" data-examples="yaml"></div>
```yaml
# non-flexbox
.test:
  grid:
    center: [1140px, 30px, false]
```

```css
.test {
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
}
.test::after {
  clear: both;
  content: "";
  display: table;
}
```
<div class="cf"></div>
