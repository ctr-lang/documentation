<div data-size="125" class="code-cont" data-example="down">
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
    move: '-1/3' 'column'
  }
})
```

<div data-size="125" data-examples="yaml"></div>
```yaml
.test:
  grid:
    move: [-1/3, column]
```

```css
.test {
  position: relative;
  top: calc(99.9% * -1 / 3 - (30px - 30px * -1 / 3) + 30px);
}
```
<div class="cf"></div>
