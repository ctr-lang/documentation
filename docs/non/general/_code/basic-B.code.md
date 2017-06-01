<div data-size="200" class="code-cont" data-example="basic-B">
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
  // cannot pass raw not needs to be string
  'not': {
    key: '.class'
    font-size: 10px
  }
})
```

<div data-size="200" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  # cannot pass raw not needs to be string
  not:
    key: .class
    font-size: 10px
```

```css
.test {
  width: 200px;
}
.test:not(.class) {
  font-size: 10px;
}
```
<div class="cf"></div>
