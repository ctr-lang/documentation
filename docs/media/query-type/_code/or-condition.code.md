<div data-size="350" class="code-cont" data-example="or-condition">
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


<div data-size="350" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  media: {
    query: {
      orCondition: {
        min-width: 200px
        min-height: 200px
        type: {
          media: 'screen'
          condition: 'only'
        }
      }
    }
    background: red
  }
})
```

<div data-size="350" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  media:
    query:
      orCondition:
        min-width: 200px
        min-height: 200px
        type:
          media: screen
          condition: only
    background: red
```

```css
.test {
  width: 200px;
}
@media only screen, (min-width: 200px), (min-height: 200px) {
  .test {
    background: #f00;
  }
}
```
<div class="cf"></div>
