<!-- gen:false -->

<div data-size="430" class="code-cont" data-example="classlock">
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

<div data-size="430" data-examples="stylus"></div>
```styl
// turn on classLock
ctrSetOption({
  classLock: true
})

ctrSetClass('Box', {
  width: 200px
  height: 200px
})

// Will not be able to overwritten or modified
ctrSetClass('Box', {
  width: 444444px
  height: 44444px
})

// width + height still 200px
ctr('.test', {
  extend: 'Box'
})
```

<div data-size="430" data-examples="yaml"></div>
```yaml
# turn on classLock
ctr:::setOption:
  classLock: true

ctr:::setClass:Box:
  width: 200px
  height: 200px

# NOTE: In YAML you can't have duplicate keys
# Will not be able to overwritten or modified
# ctr:::setClass:Box:
#   width: 444444px
#   height: 44444px

# width + height still 200px
.test:
  extend: Box
```


```css
.test {
  width: 200px;
  height: 200px;
}
```
<div class="cf"></div>
