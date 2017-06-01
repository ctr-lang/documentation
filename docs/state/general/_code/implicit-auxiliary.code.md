<div data-size="400" class="code-cont" data-example="implicit-auxiliary">
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
  hover: {
    opacity: 1
    height: 400px
  }
})
```

<div data-size="400" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  hover:
    opacity: 1
    height: 400px
```

```css
.test {
  width: 200px;
}
.test:hover {
  opacity: 1;
  height: 400px;
  transition-delay: 0s, 0s;
  transition-duration: 0.5s, 0.5s;
  transition-property: opacity, height;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:hover) {
  transition-delay: 0s, 0s;
  transition-duration: 0.5s, 0.5s;
  transition-property: opacity, height;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
