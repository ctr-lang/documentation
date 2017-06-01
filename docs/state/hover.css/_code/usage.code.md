<div data-size="640" class="code-cont" data-example="usage">
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


<div data-size="640" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  height: 200px
  background: teal
  hover: {
    preset: 'sink'
  }
})
```

<div data-size="640" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  height: 200px
  background: teal
  hover:
    preset: sink
```

```css
.test {
  width: 200px;
  height: 200px;
  background: #008080;
}
.test:hover {
  transition-delay: 0s;
  display: inline-block;
  vertical-align: middle;
  transition-duration: 0.3s;
  transform: translateY(8px);
  backface-visibility: hidden;
  transition-property: transform;
  -moz-osx-font-smoothing: grayscale;
  box-shadow: 0 0 1px rgba(0,0,0,0);
  transition-timing-function: ease-out;
}
.test:not(:hover) {
  transition-delay: 0s;
  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
  transition-duration: 0.3s;
  backface-visibility: hidden;
  transition-property: transform;
  -moz-osx-font-smoothing: grayscale;
  box-shadow: 0 0 1px rgba(0,0,0,0);
  transition-timing-function: ease-out;
}
```
<div class="cf"></div>
