<div data-size="425" class="code-cont" data-example="fraction">
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
```

```css
.test {
  flex: 0 0 auto;
  width: calc(99.9% * 1 / 3 - (30px - 30px * 1 / 3));
  height: calc(99.9% * 1 / 3 - (30px - 30px * 1 / 3));
}
.test:nth-child(n) {
  margin-right: 30px;
  margin-bottom: 30px;
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
