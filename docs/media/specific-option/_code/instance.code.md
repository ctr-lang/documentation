<div data-size="500" class="code-cont" data-example="instance">
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


<div data-size="500" data-examples="stylus"></div>
```styl
ctr('.test', {
  option: {
    media: {
      // default === 400px
      xs: 250px
      // default === 600px
      sm: 400px
    }
  }
  width: 200px
  media: {
    'xs': {
      height: 100px
    }
    'sm': {
      height: 200px
    }
    '+sm': {
      height: 300px
    }
  }
})
```

<div data-size="500" data-examples="yaml"></div>
```yaml
.test:
  option:
    media:
      # default === 400px
      xs: 250px
      # default === 600px
      sm: 400px
  width: 200px
  media:
    xs:
      height: 100px
    sm:
      height: 200px
    +sm:
      height: 300px
```

```css
.test {
  width: 200px;
}
@media (max-width: 250px) {
  .test {
    height: 100px;
  }
}
@media (min-width: 250px) and (max-width: 400px) {
  .test {
    height: 200px;
  }
}
@media (min-width: 400px) {
  .test {
    height: 300px;
  }
}
```
<div class="cf"></div>
