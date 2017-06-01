<div data-size="275" class="code-cont" data-example="and-with-mixin">
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
      andCondition: {
        above: 'sm'
        min-height: 200px
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
      andCondition:
        above: sm
        min-height: 200px
    background: red
```

```css
.test {
  width: 200px;
}
@media (min-width: 600px) and (min-height: 200px) {
  .test {
    background: #f00;
  }
}
```
<div class="cf"></div>
