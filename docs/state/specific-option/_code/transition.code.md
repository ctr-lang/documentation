<div data-size="250" class="code-cont" data-example="transition">
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

<div data-size="250" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  hover-on: {
    option: {
      // transition will be omitted
      transition: false
    }
    color: red
    height: 200px
  }
})
```

<div data-size="250" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  hover-on:
    option:
      # transition will be omitted
      transition: false
    color: red
    height: 200px
```

```css
.test {
  width: 200px;
}
.test:hover {
  color: #f00;
  height: 200px;
}
```
<div class="cf"></div>
