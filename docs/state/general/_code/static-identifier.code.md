<div data-size="250" class="code-cont" data-example="static-identifier">
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

<div data-size="250" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  link: {
    on: {
      color: red
    }
    non: {
      color: blue
    }
  }
})
```

<div data-size="250" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  link:
    on:
      color: red
    non:
      color: blue
```

```css
.test {
  width: 200px;
}
.test:link {
  color: #f00;
}
.test:not(:link) {
  color: #00f;
}
```
<div class="cf"></div>
