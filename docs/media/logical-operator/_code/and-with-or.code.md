<div data-size="325" class="code-cont" data-example="and-with-or">
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


<div data-size="325" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  media: {
    query: {
      andCondition: {
        min-width: 400px 40vw
      }
      orCondition: {
        max-height: 400px 40vh
      }
    }
    background: red
  }
})
```

<div data-size="325" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  media:
    query:
      andCondition:
        min-width: [400px, 40vw]
      orCondition:
        max-height: [400px, 40vh]
    background: red
```

```css
.test {
  width: 200px;
}
@media (min-width: 40vw) and (min-width: 400px) and (max-height: 40vh), (max-height: 400px) {
  .test {
    background: #f00;
  }
}
```
<div class="cf"></div>
