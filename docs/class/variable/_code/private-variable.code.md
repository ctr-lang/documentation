<!-- gen:false -->

<div data-size="400" class="code-cont" data-example="private-variable">
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
    width: 200px
    height: 400px
  }
  // NOT overwritten by above global variable since private
  width: '_$width$_'
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
    width: 200px
    height: 400px
  # NOT overwritten by above global variable since private
  width: _$width$_
  height: $height$

.test:
  extend: Box
```


```css
.test {
  width: 200px;
  height: 400px;
}
```
<div class="cf"></div>
