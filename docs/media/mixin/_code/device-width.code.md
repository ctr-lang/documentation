<div data-size="225" class="code-cont" data-example="device-width">
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
      between: 'md' 'lg'
      device: true
    }
    width: 100px
  }
})
```

<div data-size="225" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  media:
    query:
      between: [md, lg]
      device: true
    width: 100px
```

```css
.test {
  width: 200px;
}
@media (min-device-width: 800px) and (max-device-width: 1050px) {
  .test {
    width: 100px;
  }
}
```
<div class="cf"></div>
