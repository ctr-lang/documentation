<div data-size="400" class="code-cont" data-example="grid">
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


<div data-size="400" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  first-child: {
    height: 400px
    // grid
    grid: {
      column: '1/2'
    }
  }
})
```

<div data-size="400" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  first-child:
    height: 400px
    # grid
    grid:
      column: 1/2
```

```css
.test {
  width: 200px;
}
.test:first-child {
  height: 400px;
  flex: 0 0 auto;
  width: calc(99.9% * 1 / 2 - (30px - 30px * 1 / 2));
}
.test:first-child:nth-child(1n) {
  margin-right: 30px;
}
.test:first-child:last-child {
  margin-right: 0;
}
.test:first-child:nth-child(2n) {
  float: right;
  margin-right: 0;
}
```
<div class="cf"></div>
