<div data-size="400" class="code-cont" data-example="at">
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
  height: 200px
  'media-xs': {
    query: {
      max-height: 100px
    }
    width: 100px
  }
  'media-md': {
    query: {
      type: 'screen'
    }
    width: 200px
  }
  'media-hd': {
    width: 300px
  }
})
```

<div data-size="400" data-examples="yaml"></div>
```yaml
.test:
  height: 200px
  media-xs:
    query:
      max-height: 100px
    width: 100px
  media-md:
    query:
      type: screen
    width: 200px
  media-hd:
    width: 300px
```

```css
.test {
  height: 200px;
}
@media (max-width: 400px) and (max-height: 100px) {
  .test {
    width: 100px;
  }
}
@media only screen and (min-width: 600px) and (max-width: 800px) {
  .test {
    width: 200px;
  }
}
@media (min-width: 1050px) {
  .test {
    width: 300px;
  }
}
```
<div class="cf"></div>
