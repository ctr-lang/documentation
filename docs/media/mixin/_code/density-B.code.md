<div data-size="200" class="code-cont" data-example="density-B">
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
      density: '3dpi'
    }
    width: 100px
  }
})
```

<div data-size="200" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  media:
    query:
      density: 3dpi
    width: 100px
```

```css
.test {
  width: 200px;
}
@media (min-resolution: 3dpi) {
  .test {
    width: 100px;
  }
}
```
<div class="cf"></div>
