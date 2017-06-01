<div data-size="340" class="code-cont" data-example="non">
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
  transition: {
    opacity: 1
    // non
    non-span: {
      background: black
    }
  }
})
```

<div data-size="340" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  transition:
    opacity: 1
    # non
    non-span:
      background: black
```

```css
.test {
  opacity: 1;
  width: 200px;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(span) {
  background: #000;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
