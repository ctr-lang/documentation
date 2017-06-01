<div data-size="275" class="code-cont" data-example="and">
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
  background: teal
  media: {
    query: {
      andCondition: {
        min-width: 200px
        max-width: 400px
      }
    }
    background: red
  }
})
```

<div data-size="275" data-examples="yaml"></div>
```yaml
.test:
  background: teal
  media:
    query:
      andCondition:
        min-width: 200px
        max-width: 400px
    background: red
```

```css
.test {
  background: #008080;
}
@media (min-width: 200px) and (max-width: 400px) {
  .test {
    background: #f00;
  }
}
```
<div class="cf"></div>
