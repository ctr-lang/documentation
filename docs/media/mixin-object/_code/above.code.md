<div data-size="300" class="code-cont" data-example="above">
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
  medias: {
    // query:helper
    '+sm': {
      width: 100px
    }
    // raw:value
    '+1050px': {
      width: 300px
    }
  }
})
```

<div data-size="300" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  medias:
    # query:helper
    +sm:
      width: 100px
    # raw:value
    +1050px:
      width: 300px
```

```css
.test {
  width: 200px;
}
@media (min-width: 600px) {
  .test {
    width: 100px;
  }
}
@media (min-width: 1050px) {
  .test {
    width: 300px;
  }
}
```
<div class="cf"></div>
