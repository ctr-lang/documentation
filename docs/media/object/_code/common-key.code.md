<!-- gen:false -->

<div data-size="550" class="code-cont" data-example="common-key">
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


<div data-size="550" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  medias: {
    // merged into each media
    common: {
      query: {
        type: 'screen'
      }
      font-size: 1em
    }
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

<div data-size="550" data-examples="yaml"></div>
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
    # added to all
    common:
      font-size: 1em
      query:
        type: screen
```

```css
.test {
  width: 200px;
}
@media only screen and (max-width: 600px) {
  .test {
    width: 300px;
    font-size: 1em;
  }
}
@media only screen and (min-width: 600px) and (max-width: 800px) {
  .test {
    width: 400px;
    font-size: 1em;
  }
}
@media only screen and (min-width: 800px) and (min-resolution: 2dppx) {
  .test {
    width: 500px;
    font-size: 1em;
  }
}
```
<div class="cf"></div>
