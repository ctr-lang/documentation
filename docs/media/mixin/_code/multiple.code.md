<!-- gen:false -->

<div data-size="225" class="code-cont" data-example="multiple">
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


<div data-size="225" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  media: {
    query: {
      density: 2
      above: '300px'
    }
    width: 100px
  }
})
```

<div data-size="225" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  media:
    width: 100px
    query:
      density: 2
      above: 300px
```

```css
.test {
  width: 200px;
}
@media (min-width: 300px) and (min-resolution: 2dppx) {
  .test {
    width: 100px;
  }
}
```
<div class="cf"></div>
