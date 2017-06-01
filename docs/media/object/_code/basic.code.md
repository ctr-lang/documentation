<!-- gen:false -->

<div data-size="400" class="code-cont" data-example="basic">
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


<div data-size="400" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  medias: {
    '-sm': {
      width: 300px
    }
    md: {
      width: 400px
    }
    custom: {
      query: {
        above: 'md'
        density: 2
      }
      width: 500px
    }
  }
})
```

<div data-size="400" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  medias:
    -sm:
      width: 300px
    md:
      width: 400px
    custom:
      width: 500px
      query:
        above: md
        density: 2
```

```css
.test {
  width: 200px;
}
@media (max-width: 600px) {
  .test {
    width: 300px;
  }
}
@media (min-width: 600px) and (max-width: 800px) {
  .test {
    width: 400px;
  }
}
@media (min-width: 800px) and (min-resolution: 2dppx) {
  .test {
    width: 500px;
  }
}
```
<div class="cf"></div>
