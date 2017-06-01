<div data-size="200" class="code-cont" data-example="portrait">
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
  media: {
    query: {
      portrait: true
    }
    height: 300px
  }
})
```

<div data-size="200" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  media:
    query:
      portrait: true
    height: 300px
```

```css
.test {
  width: 200px;
}
@media (orientation: portrait) {
  .test {
    height: 300px;
  }
}
```
<div class="cf"></div>
