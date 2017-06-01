<div data-size="290" class="code-cont" data-example="attribute">
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


<div data-size="290" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  media-md: {
    width: 400px
    // attribute
    attribute: {
      key: '[data-role="test"]'
      height: 400px
    }
  }
})
```

<div data-size="290" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  media-md:
    width: 400px
    # attribute
    attribute:
      key: '[data-role="test"]'
      height: 400px
```

```css
.test {
  width: 200px;
}
@media (min-width: 600px) and (max-width: 800px) {
  .test {
    width: 400px;
  }
}
@media (min-width: 600px) and (max-width: 800px) {
  .test[data-role="test"] {
    height: 400px;
  }
}
```
<div class="cf"></div>
