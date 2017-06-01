<!-- gen:false -->

<div data-size="230" class="code-cont" data-example="basic">
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

<div data-size="230" data-examples="stylus"></div>
```styl
// create class
ctrSetClass('Box', {
  width: 200px
  height: 400px
})

ctr('.test', {
  extend: 'Box'
})
```

<div data-size="230" data-examples="yaml"></div>
```yaml
# create class
ctr:::setClass:Box:
  width: 200px
  height: 400px

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
