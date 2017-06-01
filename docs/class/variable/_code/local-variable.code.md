<!-- gen:false -->

<div data-size="280" class="code-cont" data-example="local-variable">
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

<div data-size="280" data-examples="stylus"></div>
```styl
ctrSetClass('Box', {
  $$: {
    width: '200px'
    height: '400px'
  }
  width: '$width$'
  height: '$height$'
})

ctr('.test', {
  extend: 'Box'
})
```

<div data-size="280" data-examples="yaml"></div>
```yaml
ctr:::setClass:Box:
  $$:
    width: 200px
    height: 400px
  width: $width$
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
