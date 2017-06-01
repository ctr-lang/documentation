<div data-size="275" class="code-cont" data-example="or-with-mixin">
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


<div data-size="275" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  media: {
    query: {
      orCondition: {
        above: 'sm'
        min-height: 20vh
      }
    }
    background: red
  }
})
```

<div data-size="275" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  media:
    query:
      orCondition:
        above: sm
        min-height: 20vh
    background: red
```

```css
.test {
  width: 200px;
}
@media (min-width: 600px), (min-height: 20vh) {
  .test {
    background: #f00;
  }
}
```
<div class="cf"></div>
