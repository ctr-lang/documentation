<div data-size="225" class="code-cont" data-example="override">
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
  non: {
    option: {
      key: '.thisClass'
      override: '#override'
    }
    font-size: 20px
  }
})
```

<div data-size="225" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  non:
    option:
      key: .thisClass
      override: '#override'
    font-size: 20px
```

```css
.test {
  width: 200px;
}
#override {
  font-size: 20px;
}
```
<div class="cf"></div>
