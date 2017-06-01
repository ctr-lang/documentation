<div data-size="600" class="code-cont" data-example="local">
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


<div data-size="600" data-examples="stylus"></div>
```styl
ctr('.test', {
  grid: {
    // set option for both align and column
    option: {
      flexbox: false
      gutter: 60px
    }
    align: {
      location: 'bottom-center'
    }
    column: {
      fraction: '1/4'
      cycle: '3'
    }
  }
})
```

<div data-size="600" data-examples="yaml"></div>
```yaml
.test:
  grid:
    # set option for both align and column
    option:
      flexbox: false
      gutter: 60px
    align:
      location: bottom-center
    column:
      fraction: 1/4
      cycle: 3
```

```css
.test {
  position: relative;
  width: calc(99.9% * 1 / 4 - (60px - 60px * 1 / 4));
}
.test > * {
  bottom: 0;
  left: 50%;
  top: auto;
  right: auto;
  position: absolute;
  transform: translate(-50%, 0);
}
.test:nth-child(1n) {
  clear: none;
  float: left;
  margin-right: 60px;
}
.test:last-child {
  margin-right: 0;
}
.test:nth-child(3n) {
  float: right;
  margin-right: 0;
}
.test:nth-child(3n+1) {
  clear: left;
}
```
<div class="cf"></div>
