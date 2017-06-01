<div data-size="200" class="code-cont" data-example="clearfix">
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


<div data-size="200" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  clearfix: true
})
```

<div data-size="200" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  clearfix: true
```

```css
.test {
  width: 200px;
}
.test::after {
  clear: both;
  content: "";
  display: table;
}
```
<div class="cf"></div>
