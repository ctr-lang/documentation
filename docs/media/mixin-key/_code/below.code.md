<div data-size="300" class="code-cont" data-example="below">
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
  'media--sm': {
    height: 100px
  }
  // raw:value
  'media--1050px': {
    height: 300px
  }
})
```

<div data-size="300" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  # query:helper
  media--sm:
    height: 100px
  # raw:value
  media--1050px:
    height: 300px
```

```css
.test {
  width: 200px;
}
@media (max-width: 600px) {
  .test {
    height: 100px;
  }
}
@media (max-width: 1050px) {
  .test {
    height: 300px;
  }
}
```
<div class="cf"></div>
