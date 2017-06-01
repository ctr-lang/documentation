<div data-size="200" class="code-cont" data-example="two-five-rowB">
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
ctr('.test', {
  grid: {
    row: '2/5' default false
  }
})
```

<div data-size="200" data-examples="yaml"></div>
```yaml
.test:
  grid:
    row: [2/5, default, false]
```

```css
.test {
  width: 100%;
  margin-bottom: 30px;
  height: calc(99.9% * 2 / 5 - (30px - 30px * 2 / 5));
}
.test:last-child {
  margin-bottom: 0;
}
```
<div class="cf"></div>
