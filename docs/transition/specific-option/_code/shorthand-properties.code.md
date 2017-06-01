<div data-size="270" class="code-cont" data-example="shorthand-properties">
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


<div data-size="270" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  transition: {
    option: {
      duration: 1s
      transitionShorthand: true
    }
    opacity: 1
    color: black
    background: red
  }
})
```

<div data-size="270" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  transition:
    option:
      duration: 1s
      transitionShorthand: true
    opacity: 1
    color: black
    background: red
```

```css
.test {
  opacity: 1;
  color: #000;
  width: 200px;
  background: #f00;
  transition: opacity 1s cubic-bezier(0.42, 0, 0.58, 1) 0s, color 1s cubic-bezier(0.42, 0, 0.58, 1) 0s, background 1s cubic-bezier(0.42, 0, 0.58, 1) 0s;
}
```
<div class="cf"></div>
