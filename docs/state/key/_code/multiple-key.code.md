<div data-size="670" class="code-cont" data-example="multiple-key">
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

<div data-size="670" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  state: {
    option: {
      key: 'hover' 'focus'
      duration: 1s
    }
    on: {
      background: red
    }
    non: {
      background: blue
    }
  }
})
```

<div data-size="670" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  state:
    option:
      key: [hover, focus]
      duration: 1s
    on:
      background: red
    non:
      background: blue
```

```css
.test {
  width: 200px;
}
.test:hover {
  background: #f00;
  transition-delay: 0s;
  transition-duration: 1s;
  transition-property: background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:hover) {
  background: #00f;
  transition-delay: 0s;
  transition-duration: 1s;
  transition-property: background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:focus {
  background: #f00;
  transition-delay: 0s;
  transition-duration: 1s;
  transition-property: background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:focus) {
  background: #00f;
  transition-delay: 0s;
  transition-duration: 1s;
  transition-property: background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
