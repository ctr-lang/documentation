<!-- gen:false -->

<div data-size="225" class="code-cont" data-example="external">
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

<div data-size="225" data-examples="stylus"></div>
```styl
$MyObject = {
  height: 200px
  background: red
}

ctr('.test', {
  width: 200px
  merge: $MyObject
})
```

```css
.test {
  width: 200px;
  height: 200px;
  background: #f00;
}
```
<div class="cf"></div>
