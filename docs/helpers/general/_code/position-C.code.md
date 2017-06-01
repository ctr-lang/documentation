<div data-size="175" class="code-cont" data-example="position-C">
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
  // position: <type> <1> <2> <3> <2>
  position: absolute 10px 20px 30px
})
```

<div data-size="175" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  # position: [<type>, <1>, <2>, <3>, <2>]
  position: [absolute, 10px, 20px, 30px]
```

```css
.test {
  top: 10px;
  left: 20px;
  right: 20px;
  bottom: 30px;
  width: 200px;
  position: absolute;
}
```
<div class="cf"></div>
