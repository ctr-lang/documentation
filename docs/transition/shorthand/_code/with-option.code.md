<div data-size="310" class="code-cont" data-example="with-option">
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


<div data-size="310" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  transition: {
    option: {
      ease: 'ease-out'
      shorthand: {
        background: 1s 10s ease-in
        color: 2s
      }
    }
    color: red
    background: green
  }
})
```

<div data-size="310" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  transition:
    option:
      ease: ease-out
      shorthand:
        background: [1s, 10s, ease-in]
        color: 2s
    color: red
    background: green
```

```css
.test {
  color: #f00;
  width: 200px;
  background: #008000;
  transition-delay: 10s, 0s;
  transition-duration: 1s, 2s;
  transition-property: background, color;
  transition-timing-function: ease-in, ease-out;
}
```
<div class="cf"></div>
