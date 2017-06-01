<div data-size="380" class="code-cont" data-example="true-value">
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


<div data-size="380" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  medias: {
    common: {
      query: {
        type: 'screen'
        'max-height': 400px
      }
      height: 222px
    }
    sm: {
      width: 300px
    }
    // inherits common
    md: true
  }
})
```

<div data-size="380" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  medias:
    common:
      query:
        type: screen
        max-height: 400px
      height: 222px
    sm:
      width: 300px
    # inherits common
    md: true
```

```css
.test {
  width: 200px;
}
@media only screen and (min-width: 400px) and (max-width: 600px) and (max-height: 400px) {
  .test {
    width: 300px;
    height: 222px;
  }
}
@media only screen and (min-width: 600px) and (max-width: 800px) and (max-height: 400px) {
  .test {
    height: 222px;
  }
}
```
<div class="cf"></div>
