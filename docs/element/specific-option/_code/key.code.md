<div data-size="230" class="code-cont" data-example="key">
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


<div data-size="230" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  element: {
    option: {
      key: 'after'
    }
    content: 'ctr'
    font-size: 1em
  }
})
```

<div data-size="230" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  element:
    option:
      key: after
    content: ctr
    font-size: 1em
```

```css
.test {
  width: 200px;
}
.test::after {
  font-size: 1em;
  content: "ctr";
}
```
<div class="cf"></div>
