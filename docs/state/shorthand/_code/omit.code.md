<div data-size="300" class="code-cont" data-example="omit">
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

<div data-size="300" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  hover-on: {
    height: 400px
    font-size: 1em
    background: red
    shorthand: {
      height: 1s
      // omitted
      font-size: false
    }
  }
})
```

<div data-size="300" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  hover-on:
    height: 400px
    font-size: 1em
    background: red
    shorthand:
      height: 1s
      # omitted
      font-size: false
```

```css
.test {
  width: 200px;
}
.test:hover {
  height: 400px;
  font-size: 1em;
  background: #f00;
  transition-delay: 0s, 0s;
  transition-duration: 1s, 0.5s;
  transition-property: height, background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
