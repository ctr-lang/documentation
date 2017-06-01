<div data-size="260" class="code-cont" data-example="shorthand-properties">
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

<div data-size="260" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  hover-on: {
    option: {
      transitionShorthand: true
    }
    color: red
    height: 200px
    font-size: 2em
  }
})
```

<div data-size="260" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  hover-on:
    option:
      transitionShorthand: true
    color: red
    height: 200px
    font-size: 2em
```

```css
.test {
  width: 200px;
}
.test:hover {
  color: #f00;
  height: 200px;
  font-size: 2em;
  transition: font-size 0.5s cubic-bezier(0.42, 0, 0.58, 1) 0s, color 0.5s cubic-bezier(0.42, 0, 0.58, 1) 0s, height 0.5s cubic-bezier(0.42, 0, 0.58, 1) 0s;
}
```
<div class="cf"></div>
