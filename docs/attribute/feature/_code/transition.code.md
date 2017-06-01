<div data-size="280" class="code-cont" data-example="transition">
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


<div data-size="280" data-examples="stylus"></div>
```styl
ctr('.test > div', {
  width: 200px
  attribute: {
    key: '[data-role="test"]'
    width: 300px
    // transition
    transition: {
      background: black
    }
  }
})
```

<div data-size="280" data-examples="yaml"></div>
```yaml
.test > div:
  width: 200px
  attribute:
    key: '[data-role="test"]'
    width: 300px
    # transition
    transition:
      background: black
```

```css
.test > div {
  width: 200px;
}
.test > div[data-role="test"] {
  width: 300px;
  background: #000;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
