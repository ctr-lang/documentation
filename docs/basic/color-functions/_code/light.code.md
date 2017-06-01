<!-- gen:false -->

<div data-size="150" class="code-cont" data-example="light">
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
    content: 'Is black light: ' + light(black)
  }
})
```

```css
.test {
  width: 200px;
}
.test::before {
  content: "Is black light: false";
}
```
<div class="cf"></div>
