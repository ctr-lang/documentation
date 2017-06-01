<div data-size="175" class="code-cont" data-example="position-A">
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


<div data-size="175" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  // position: <type> <1> <1> <1> <1>
  position: absolute 10px
})
```

<div data-size="175" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  # position: [<type>, <1>, <1>, <1>, <1>]
  position: [absolute, 10px]
```

```css
.test {
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  width: 200px;
  position: absolute;
}
```
<div class="cf"></div>
