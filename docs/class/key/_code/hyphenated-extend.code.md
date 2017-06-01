<!-- gen:false -->

<div data-size="330" class="code-cont" data-example="hyphenated-extend">
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

<div data-size="330" data-examples="stylus"></div>
```styl
ctrSetClass('Box', {
  $$: {
    width: 200px
    height: 200px
  }
  width: '$width$'
  height: '$height$'
})

ctr('.test', {
  background: blue
  extend-Box: {
    height: 400px
  }
})
```

<div data-size="330" data-examples="yaml"></div>
```yaml
ctr:::setClass:Box:
  $$:
    width: 200px
    height: 200px
  width: $width$
  height: $height$

.test:
  background: blue
  extend-Box:
    height: 400px
```


```css
.test {
  width: 200px;
  height: 400px;
  background: #00f;
}
```
<div class="cf"></div>
