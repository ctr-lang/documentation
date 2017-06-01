<div data-size="200" class="code-cont" data-example="query-type-multiple">
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
      type: 'screen' 'tv'
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
      type: [screen, tv]
    background: red
```

```css
.test {
  width: 200px;
}
@media only screen, tv {
  .test {
    background: #f00;
  }
}
```
<div class="cf"></div>
