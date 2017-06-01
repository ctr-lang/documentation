<div data-size="275" class="code-cont" data-example="basic">
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


<div data-size="275" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  transitions: {
    one: {
      opacity: 1
    }
    two: {
      color: blue
      background: red
    }
  }
})
```

<div data-size="275" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  transitions:
    one:
      opacity: 1
    two:
      color: blue
      background: red
```

```css
.test {
  opacity: 1;
  color: #00f;
  width: 200px;
  background: #f00;
  transition-delay: 0s, 0s, 0s;
  transition-duration: 0.5s, 0.5s, 0.5s;
  transition-property: opacity, color, background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
