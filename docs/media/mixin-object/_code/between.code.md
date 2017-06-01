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
  height: 200px
  medias: {
    // query:helper
    'xs-md': {
      width: 100px
    }
    // raw:value
    '1050px-1800px': {
      width: 300px
    }
  }
})
```

<div data-size="300" data-examples="yaml"></div>
```yaml
.test:
  height: 200px
  medias:
    # query:helper
    xs-md:
      width: 100px
    # raw:value
    1050px-1800px:
      width: 300px
```

```css
.test {
  height: 200px;
}
@media (min-width: 400px) and (max-width: 800px) {
  .test {
    width: 100px;
  }
}
@media (min-width: 1050px) and (max-width: 1800px) {
  .test {
    width: 300px;
  }
}
```

<div class="cf"></div>
