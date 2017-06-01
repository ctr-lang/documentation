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
  transition: {
    option: {
      delay: 4s
      duration: 20s
      ease: 'ease-in'
      shorthand: {
        background: 2s default default
        color: default 1s 'ease-out'
        opacity: 10s 5s default
      }
    }
    opacity: 1
    color: red
    background: black
  }
})
```

<div data-size="400" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  transition:
    option:
      delay: 4s
      duration: 20s
      ease: ease-in
      shorthand:
        background: [2s, default, default]
        color: [default, 1s, ease-out]
        opacity: [10s, 5s, default]
    opacity: 1
    color: red
    background: black
```

```css
.test {
  opacity: 1;
  color: #f00;
  width: 200px;
  background: #000;
  transition-delay: 4s, 1s, 5s;
  transition-duration: 2s, 20s, 10s;
  transition-property: background, color, opacity;
  transition-timing-function: ease-in, ease-out, ease-in;
}
```
<div class="cf"></div>
