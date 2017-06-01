<div data-size="225" class="code-cont" data-example="multiple-A">
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
      'max-width': 800px
      'max-height': 800px
    }
    background: red
  }
})
```

<div data-size="225" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  media:
    query:
      max-width: 800px
      max-height: 800px
    background: red
```

```css
.test {
  width: 200px;
}
@media (max-width: 800px) and (max-height: 800px) {
  .test {
    background: #f00;
  }
}
```
<div class="cf"></div>
