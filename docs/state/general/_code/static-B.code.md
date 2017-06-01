<div data-size="275" class="code-cont" data-example="static-B">
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

<div data-size="275" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  hover: {
    // in an auxiliary state
    on: {
      height: 400px
      static: {
        opacity: 1
      }
    }
  }
})
```

<div data-size="275" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  hover:
    # in an auxiliary state
    on:
      height: 400px
      static:
        opacity: 1
```

```css
.test {
  width: 200px;
}
.test:hover {
  opacity: 1;
  height: 400px;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: height;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
