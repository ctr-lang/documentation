<div data-size="125" class="code-cont" data-example="gutter">
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


<div data-size="125" data-examples="stylus"></div>
```styl
ctr('.test', {
  grid: {
    offset: '1/2' default '60px'
  }
})
```

<div data-size="125" data-examples="yaml"></div>
```yaml
.test:
  grid:
    offset: [1/2, default, 60px]
```

```css
.test {
  margin-left: calc(99.9% * (-1 / 2 * -1) - (60px - 60px * (-1 / 2 * -1)) + 60px) !important;
}
```
<div class="cf"></div>
