<div data-size="300" class="code-cont" data-example="query">
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
  media: {
    query: {
      max-width: 300px
      type: {
        media: 'screen'
        condition: 'not'
      }
    }
    background: red
  }
})
```

<div data-size="300" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  media:
    query:
      max-width: 300px
      type:
        media: screen
        condition: not
    background: red
```

```css
.test {
  width: 200px;
}
@media not screen and (max-width: 300px) {
  .test {
    background: #f00;
  }
}
```
<div class="cf"></div>
