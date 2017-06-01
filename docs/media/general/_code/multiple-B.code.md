<div data-size="200" class="code-cont" data-example="multiple-B">
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


<div data-size="200" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  media: {
    query: {
      'max-width': 800px 50vw
    }
    background: red
  }
})
```

<div data-size="200" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  media:
    query:
      max-width: [800px, 50vw]
    background: red
```

```css
.test {
  width: 200px;
}
@media (max-width: 50vw) and (max-width: 800px) {
  .test {
    background: #f00;
  }
}
```
<div class="cf"></div>
