<div data-size="300" class="code-cont" data-example="between">
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


<div data-size="300" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  // query:helper
  'media-|xs-md': {
    height: 100px
  }
  // raw:value
  'media-|1050px-1800px': {
    height: 300px
  }
})
```

<div data-size="300" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  # query:helper
  media-|xs-md:
    height: 100px
  # raw:value
  media-|1050px-1800px:
    height: 300px
```

```css
.test {
  width: 200px;
}
@media (min-width: 400px) and (max-width: 800px) {
  .test {
    height: 100px;
  }
}
@media (min-width: 1050px) and (max-width: 1800px) {
  .test {
    height: 300px;
  }
}
```
<div class="cf"></div>
