<div data-size="490" class="code-cont" data-example="omit">
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


<div data-size="490" data-examples="stylus"></div>
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
    md: {
      option: {
        // omits type
        omit: 'query.type'
      }
      width: 400px
    }
  }
})
```

<div data-size="490" data-examples="yaml"></div>
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
    md:
      option:
        # omits type
        omit: query.type
      width: 400px
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
@media (min-width: 600px) and (max-width: 800px) and (max-height: 400px) {
  .test {
    width: 400px;
    height: 222px;
  }
}
```
<div class="cf"></div>
