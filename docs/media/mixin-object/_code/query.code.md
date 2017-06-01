<div data-size="420" class="code-cont" data-example="query">
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


<div data-size="420" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  medias: {
    // query:helper
    '-md': {
      query: {
        max-height: 'md'
      }
      width: 300px
    }
    // raw:value
    '+800px': {
      query: {
        min-height: '800px'
      }
      width: 400px
    }
  }
})
```

<div data-size="420" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  medias:
    # query:helper
    -md:
      query:
        max-height: md
      width: 300px
    # raw:value
    +800px:
      query:
        min-height: 800px
      width: 400px
```

```css
.test {
  width: 200px;
}
@media (max-width: 800px) and (max-height: 800px) {
  .test {
    width: 300px;
  }
}
@media (min-width: 800px) and (min-height: 800px) {
  .test {
    width: 400px;
  }
}
```
<div class="cf"></div>
