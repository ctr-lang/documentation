<!-- gen:false -->

<div data-size="200" class="code-cont" data-example="density-A">
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
      density: 2
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
    width: 100px
    query:
      density: 2
```

```css
.test {
  width: 200px;
}
@media (min-resolution: 2dppx) {
  .test {
    width: 100px;
  }
}
```
<div class="cf"></div>
