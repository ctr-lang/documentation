<div data-size="225" class="code-cont" data-example="use">
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
  // transform will be omitted
  transform: {
    use: false
    translateX: 10px
    translateY: 20px
    scaleX: 90deg
  }
})
```

<div data-size="225" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  # transform will be omitted
  transform:
    use: false
    translateX: 10px
    translateY: 20px
    scaleX: 90deg
```

```css
.test {
  width: 200px;
}
```
<div class="cf"></div>
