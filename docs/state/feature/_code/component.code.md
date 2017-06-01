<div data-size="390" class="code-cont" data-example="component">
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


<div data-size="390" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  hover-on: {
    height: 400px
    // component
    component-section: {
      opacity: 1
    }
  }
})
```

<div data-size="390" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  hover-on:
    height: 400px
    # component
    component-section:
      opacity: 1
```

```css
.test {
  width: 200px;
}
.test:hover {
  height: 400px;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: height;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:hover > section {
  opacity: 1;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
