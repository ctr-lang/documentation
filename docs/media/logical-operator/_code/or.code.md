<div data-size="250" class="code-cont" data-example="or">
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
  background: teal
  media: {
    query: {
      orCondition: {
        max-width: 400px 30vw
      }
    }
    background: red
  }
})
```

<div data-size="250" data-examples="yaml"></div>
```yaml
.test:
  background: teal
  media:
    query:
      orCondition:
        max-width: [400px, 30vw]
    background: red
```

```css
.test {
  background: #008080;
}
@media (max-width: 30vw), (max-width: 400px) {
  .test {
    background: #f00;
  }
}
```
<div class="cf"></div>
