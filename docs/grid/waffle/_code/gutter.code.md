<div data-size="425" class="code-cont" data-example="gutter">
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

<div data-size="425" data-examples="stylus"></div>
```styl
ctr('.test', {
  grid: {
    waffle: {
      fraction: '1/3'
      gutter: 60px
    }
  }
})
```

<div data-size="425" data-examples="yaml"></div>
```yaml
.test:
  grid:
    waffle:
      fraction: 1/3
      gutter: 60px
```

```css
.test {
  flex: 0 0 auto;
  width: calc(99.9% * 1 / 3 - (60px - 60px * 1 / 3));
  height: calc(99.9% * 1 / 3 - (60px - 60px * 1 / 3));
}
.test:nth-child(n) {
  margin-right: 60px;
  margin-bottom: 60px;
}
.test:nth-child(3n) {
  margin-right: 0;
}
.test:last-child {
  margin-right: 0;
  margin-bottom: 0;
}
.test:nth-last-child(-n+3) {
  margin-bottom: 0;
}
```
<div class="cf"></div>
