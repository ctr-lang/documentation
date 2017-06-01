<div data-size="400" class="code-cont" data-example="default-keyword">
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
  hover-on: {
    option: {
      ease: 'ease-out'
      shorthand: {
        height: 1s
        // 0.25s 0s 'ease-in'
        opacity: 0.25s default 'ease-in'
        // 0.5s 2s 'ease-out'
        background: default 2s default
      }
    }
    opacity: 0.5
    height: 200px
    background: red
  }
})
```

<div data-size="400" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  hover-on:
    option:
      ease: ease-out
      shorthand:
        height: 1s
        # 0.25s 0s ease-in
        opacity: [0.25s, default, ease-in]
        # 0.5s 2s ease-out
        background: [default, 2s, default]
    opacity: 0.5
    height: 200px
    background: red
```

```css
.test {
  width: 200px;
}
.test:hover {
  opacity: 0.5;
  height: 200px;
  background: #f00;
  transition-delay: 0s, 0s, 2s;
  transition-duration: 1s, 0.25s, 0.5s;
  transition-property: height, opacity, background;
  transition-timing-function: ease-out, ease-in, ease-out;
}
```
<div class="cf"></div>
