<div data-size="250" class="code-cont" data-example="media">
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


<div data-size="250" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  media: {
    query: {
      type: {
        media: 'screen'
      }
    }
    background: red
  }
})
```

<div data-size="250" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  media:
    query:
      type:
        media: screen
    background: red
```

```css
.test {
  width: 200px;
}
@media only screen {
  .test {
    background: #f00;
  }
}
```
<div class="cf"></div>
