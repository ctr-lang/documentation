<div data-size="250" class="code-cont" data-example="media">
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
  non: {
    key: '.bad'
    height: 200px
    // media
    media-md: {
      height: 300px
    }
  }
})
```

<div data-size="250" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  non:
    key: .bad
    height: 200px
    # media
    media-md:
      height: 300px
```

```css
.test {
  width: 200px;
}
.test:not(.bad) {
  height: 200px;
}
@media (min-width: 600px) and (max-width: 800px) {
  .test:not(.bad) {
    height: 300px;
  }
}
```
<div class="cf"></div>
