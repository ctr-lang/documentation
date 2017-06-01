<!-- gen:false -->

<div data-size="150" class="code-cont" data-example="odd">
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


<div data-size="150" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  before: {
    content: 'Is 6 odd: ' + odd(6)
  }
})
```

```css
.test {
  width: 200px;
}
.test::before {
  content: "Is 6 odd: false";
}
```
<div class="cf"></div>
