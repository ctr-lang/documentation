<div data-size="575" class="code-cont" data-example="none">
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


<div data-size="575" data-examples="stylus"></div>
```styl
ctr('.test', {
  grid: {
    column: {
      none: true
    }
  }
})
```

<div data-size="575" data-examples="yaml"></div>
```yaml
.test:
  grid:
    column:
      none: true
```

```css
.test {
  width: auto;
}
.test:last-child {
  clear: none;
  float: none;
  width: auto;
  margin-right: 0;
}
.test:nth-child(n) {
  clear: none;
  float: none;
  width: auto;
  margin-right: 0;
}
.test:nth-child(1n+1) {
  clear: none;
  float: none;
  width: auto;
  margin-right: 0;
}
.test:nth-child(1n) {
  clear: none;
  float: none;
  width: auto;
  margin-right: 0;
}
```
<div class="cf"></div>
