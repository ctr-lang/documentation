<div data-size="150" class="code-cont" data-example="content-false">
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
    content: false
  }
})
```

<div data-size="150" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  before:
    content: false
```

```css
.test {
  width: 200px;
}
.test::before {
  content: "";
}
```
<div class="cf"></div>
