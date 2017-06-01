<div data-size="380" class="code-cont" data-example="override">
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

<div data-size="380" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  hover: {
    on: {
      option: {
        override: '#override:hover'
      }
      opacity: 1
    }
    non: {
      option: {
        override: '#override:not(:hover)'
      }
      opacity: 0.5
    }
  }
})
```

<div data-size="380" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  hover:
    on:
      option:
        override: '#override:hover'
      opacity: 1
    non:
      option:
        override: '#override:not(:hover)'
      opacity: 0.5
```

```css
.test {
  width: 200px;
}
#override:hover {
  opacity: 1;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
#override:not(:hover) {
  opacity: 0.5;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
