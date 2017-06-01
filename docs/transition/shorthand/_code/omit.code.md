<div data-size="300" class="code-cont" data-example="omit">
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


<div data-size="300" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  transition: {
    opacity: 1
    color: blue
    background: red
    shorthand: {
      opacity: 2s
      // omitted
      background: false
    }
  }
})
```

<div data-size="300" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  transition:
    opacity: 1
    color: blue
    background: red
    shorthand:
      opacity: 2s
      # omitted
      background: false
```

```css
.test {
  opacity: 1;
  color: #00f;
  width: 200px;
  background: #f00;
  transition-delay: 0s, 0s;
  transition-duration: 2s, 0.5s;
  transition-property: opacity, color;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
