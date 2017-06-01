<!-- gen:false -->

<div data-size="400" class="code-cont" data-example="global-variable">
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
// sets global variable
ctrSetVariable({
  width: 400px
})

ctrSetClass('Box', {
  $$: {
    // overwritten by above global variable
    width: 200px
    height: 400px
  }
  width: '$width$'
  height: '$height$'
})

ctr('.test', {
  extend: 'Box'
})
```

<div data-size="400" data-examples="yaml"></div>
```yaml
# sets global variable
ctr:::setVariable:
  width: 400px

ctr:::setClass:Box:
  $$:
    # overwritten by above global variable
    width: 200px
    height: 400px
  width: $width$
  height: $height$

.test:
  extend: Box
```


```css
.test {
  width: 400px;
  height: 400px;
}
```
<div class="cf"></div>
