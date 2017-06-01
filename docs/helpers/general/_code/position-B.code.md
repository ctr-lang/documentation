<div data-size="175" class="code-cont" data-example="position-B">
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
  // position: <type> <1> <2> <1> <2>
  position: absolute 10px 20px
})
```

<div data-size="175" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  # position: [<type>, <1>, <2>, <1>, <2>]
  position: [absolute, 10px, 20px]
```

```css
.test {
  top: 10px;
  left: 20px;
  right: 20px;
  bottom: 10px;
  width: 200px;
  position: absolute;
}
```
<div class="cf"></div>
