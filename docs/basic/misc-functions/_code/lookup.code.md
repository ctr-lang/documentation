<!-- omit:true -->

<div data-size="275" class="code-cont" data-example="lookup">
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


<div data-size="275" data-examples="stylus yaml"></div>
```styl
font-size-1 = 10px
font-size-2 = 20px
font-size-3 = 30px

for i in 1..3
  .test-{i}
    ctr({
      width: 200px
      font-size: lookup('font-size-' + i)
    })
```

```css
.test-1 {
  width: 200px;
  font-size: 10px;
}
.test-2 {
  width: 200px;
  font-size: 20px;
}
.test-3 {
  width: 200px;
  font-size: 30px;
}
```
<div class="cf"></div>
