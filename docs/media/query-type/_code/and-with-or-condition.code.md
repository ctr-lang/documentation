<div data-size="450" class="code-cont" data-example="and-with-or-condition">
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


<div data-size="450" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  media: {
    query: {
      andCondition: {
        min-width: 200px
        min-height: 200px
      }
      orCondition: {
        max-width: 800px
        max-height: 800px
      }
      type: {
        media: 'screen'
        condition: 'not'
      }
    }
    background: red
  }
})
```

<div data-size="450" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  media:
    query:
      andCondition:
        min-width: 200px
        min-height: 200px
      orCondition:
        max-width: 800px
        max-height: 800px
      type:
        media: screen
        condition: not
    background: red
```

```css
.test {
  width: 200px;
}
@media not screen and (min-width: 200px) and (min-height: 200px) and (max-width: 800px), (max-height: 800px) {
  .test {
    background: #f00;
  }
}
```
<div class="cf"></div>
