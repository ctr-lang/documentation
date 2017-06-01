<div data-size="200" class="code-cont" data-example="landscape">
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
      landscape: true
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
      landscape: true
    height: 300px
```

```css
.test {
  width: 200px;
}
@media (orientation: landscape) {
  .test {
    height: 300px;
  }
}
```
<div class="cf"></div>
