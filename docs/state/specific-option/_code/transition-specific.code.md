<div data-size="290" class="code-cont" data-example="transition-specific">
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

<div data-size="290" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  hover-on: {
    option: {
      // only creates transitions for color + font-size
      transition: 'color' 'font-size'
    }
    color: red
    height: 200px
    font-size: 2em
  }
})
```

<div data-size="290" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  hover-on:
    option:
      # only creates transitions for color + font-size
      transition: [color, font-size]
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
  transition-delay: 0s, 0s;
  transition-duration: 0.5s, 0.5s;
  transition-property: font-size, color;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
