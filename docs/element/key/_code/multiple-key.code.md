<!-- gen:false -->

<div data-size="340" class="code-cont" data-example="multiple-key">
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


<div data-size="340" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  customElement: {
    key: 'before' 'after' 'first-child' 'nth-of-type(2)'
    position: absolute
  }
})
```

<div data-size="340" data-examples="yaml"></div>
```yaml
'.test':
  width: 200px
  customElement:
    key: ['before', 'after', 'first-child', 'nth-of-type(2)']
    position: absolute
```

```css
.test {
  width: 200px;
}
.test::before {
  position: absolute;
}
.test::after {
  position: absolute;
}
.test:first-child {
  position: absolute;
}
.test:nth-of-type(2) {
  position: absolute;
}
```
<div class="cf"></div>
