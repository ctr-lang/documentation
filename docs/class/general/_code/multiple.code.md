<!-- gen:false -->

<div data-size="350" class="code-cont" data-example="multiple">
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

<div data-size="350" data-examples="stylus"></div>
```styl
ctrSetClass('Box', {
  width: 200px
  height: 400px
})

ctrSetClass('Round-Soft', {
  border-radius: 4px
})

ctr('.test', {
  width: 200px
  'component-.blue-box': {
    extend: 'Box' 'Round-Soft'
    background: blue
  }
})
```

<div data-size="350" data-examples="yaml"></div>
```yaml
ctr:::setClass:Box:
  width: 200px
  height: 400px

ctr:::setClass:Round-Soft:
  border-radius: 4px

.test:
  width: 200px
  component-.blue-box:
    extend: [Box, Round-Soft]
    background: blue
```


```css
.test {
  width: 200px;
}
.test > .blue-box {
  width: 200px;
  height: 400px;
  background: #00f;
  border-radius: 4px;
}
```
<div class="cf"></div>
