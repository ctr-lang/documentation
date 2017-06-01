<div data-size="690" class="code-cont" data-example="grid">
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


<div data-size="690" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  transition: {
    opacity: 1
    // grid
    grid: {
      column: '1/3'
    }
  }
})
```

<div data-size="690" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  transition:
    opacity: 1
    # grid
    grid:
      column: 1/3
```

```css
.test {
  opacity: 1;
  width: 200px;
  flex: 0 0 auto;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:nth-child(1n) {
  margin-right: 30px;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: margin-right;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:last-child {
  margin-right: 0;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: margin-right;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:nth-child(3n) {
  float: right;
  margin-right: 0;
  transition-delay: 0s, 0s;
  transition-duration: 0.5s, 0.5s;
  transition-property: float, margin-right;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
