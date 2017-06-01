<div data-size="660" class="code-cont" data-example="common-key">
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

<div data-size="660" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  states: {
    hover: {
      on: {
        opacity: 1
      }
      non: {
        option: {
          duration: 0.5s
        }
        opacity: 0.75
      }
    }
    active: {
      color: red
    }
    // merged into each state
    common: {
      option: {
        duration: 1.25s
        delay: 0.25s
      }
    }
  }
})
```

<div data-size="660" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  states:
    hover:
      on:
        opacity: 1
      non:
        option:
          duration: 0.5s
        opacity: 0.75
    active:
      color: red
    # merged into each state
    common:
      option:
        duration: 1.25s
        delay: 0.25s
```

```css
.test {
  width: 200px;
}
.test:hover {
  opacity: 1;
  transition-delay: 0.25s;
  transition-duration: 1.25s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:hover) {
  opacity: 0.75;
  transition-delay: 0.25s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:active {
  color: #f00;
  transition-delay: 0.25s;
  transition-property: color;
  transition-duration: 1.25s;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:active) {
  transition-delay: 0.25s;
  transition-property: color;
  transition-duration: 1.25s;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
