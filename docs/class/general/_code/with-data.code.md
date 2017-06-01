<!-- gen:false -->

<div data-size="420" class="code-cont" data-example="with-data">
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

<div data-size="420" data-examples="stylus"></div>
```styl
ctrSetClass('Box', {
  width: 200px
  height: 400px
})

ctr('.test', {
  width: 200px
  components: {
    '.blue-box': {
      extend: 'Box'
      background: blue
    }
    '.red-box': {
      extend: 'Box'
      background: red
      height: 500px
    }
  }
})
```

<div data-size="420" data-examples="yaml"></div>
```yaml
# create class
ctr:::setClass:Box:
  width: 200px
  height: 400px

.test:
  width: 200px
  components:
    .blue-box:
      extend: Box
      background: blue
    .red-box:
      extend: Box
      background: red
      height: 500px
```


```css
.test {
  width: 200px;
}
.test > .blue-box {
  width: 200px;
  height: 400px;
  background: #00f;
}
.test > .red-box {
  width: 200px;
  height: 500px;
  background: #f00;
}
```
<div class="cf"></div>
