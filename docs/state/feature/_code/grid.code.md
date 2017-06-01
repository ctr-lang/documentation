<div data-size="510" class="code-cont" data-example="grid">
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


<div data-size="510" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  hover-on: {
    height: 400px
    // grid -> non-flex
    grid: {
      align: 'right' false
    }
  }
})
```

<div data-size="510" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  hover-on:
    height: 400px
    # grid -> non-flex
    grid:
      align: [right, false]
```

```css
.test {
  width: 200px;
}
.test:hover {
  height: 400px;
  position: relative;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: height;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:hover > * {
  right: 0;
  top: 50%;
  left: auto;
  bottom: auto;
  position: absolute;
  transform: translate(0, -50%);
  transition-delay: 0s, 0s, 0s, 0s, 0s;
  transition-duration: 0.5s, 0.5s, 0.5s, 0.5s, 0.5s;
  transition-property: top, right, bottom, left, transform;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
