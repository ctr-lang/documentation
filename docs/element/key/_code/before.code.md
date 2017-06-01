<div data-size="170" class="code-cont" data-example="before">
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


<div data-size="170" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  before: {
    content: 'test'
    font-size: 1em
  }
})
```

<div data-size="170" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  before:
    content: test
    font-size: 1em
```

```css
.test {
  width: 200px;
}
.test::before {
  font-size: 1em;
  content: "test";
}
```
<div class="cf"></div>
