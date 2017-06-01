<div data-size="320" class="code-cont" data-example="multiple">
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


<div data-size="320" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  transition: {
    height: 400px
    opacity: 1
    shorthand: {
      height: 1s
      opacity: 0.5s 0.25s 'ease-out'
      // This property is fictional,
      // the point is the sky is the limit
      oldOverholt: 100s 100s 'truckin'
    }
  }
})
```

<div data-size="320" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  transition:
    height: 400px
    opacity: 1
    shorthand:
      height: 1s
      opacity: [0.5s, 0.25s, ease-out]
      # This property is fictional,
      # the point is the sky is the limit
      oldOverholt: [100s, 100s, truckin]
```

```css
.test {
  opacity: 1;
  width: 200px;
  height: 400px;
  transition-delay: 0s, 0.25s, 100s;
  transition-duration: 1s, 0.5s, 100s;
  transition-property: height, opacity, oldOverholt;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), ease-out, truckin;
}
```
<div class="cf"></div>
