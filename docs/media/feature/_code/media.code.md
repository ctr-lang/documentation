<div data-size="325" class="code-cont" data-example="media">
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


<div data-size="325" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  media-md: {
    width: 400px
    // media
    media: {
      query: {
        min-height: 200px
        max-height: 500px
      }
      border-radius: 10px
    }
  }
})
```

<div data-size="325" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  media-md:
    width: 400px
    # media
    media:
      query:
        min-height: 200px
        max-height: 500px
      border-radius: 10px
```

```css
.test {
  width: 200px;
}
@media (min-width: 600px) and (max-width: 800px) {
  .test {
    width: 400px;
  }
}
@media (min-width: 600px) and (max-width: 800px) and (min-height: 200px) and (max-height: 500px) {
  .test {
    border-radius: 10px;
  }
}
```
<div class="cf"></div>
