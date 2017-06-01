<div data-size="780" class="code-cont" data-example="multiple-key-merge">
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

<div data-size="780" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  customStateOptions: {
    option: {
      duration: 1s
      key: 'hover' 'active'
    }
    on: {
      opacity: 1
    }
    non: {
      opacity: 0.75
      background: red
    }
  }
  hover-on: {
    background: green
  }
  active-on: {
    background: blue
  }
})
```

<div data-size="780" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  customStateOptions:
    option:
      duration: 1s
      key: [hover, active]
    on:
      opacity: 1
    non:
      opacity: 0.75
      background: red
  hover-on:
    background: green
  active-on:
    background: blue
```

```css
.test {
  width: 200px;
}
.test:hover {
  opacity: 1;
  background: #008000;
  transition-delay: 0s, 0s;
  transition-duration: 1s, 0.5s;
  transition-property: opacity, background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:hover) {
  opacity: 0.75;
  background: #f00;
  transition-delay: 0s, 0s;
  transition-duration: 1s, 1s;
  transition-property: opacity, background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
.test:active {
  opacity: 1;
  background: #00f;
  transition-delay: 0s, 0s;
  transition-duration: 1s, 0.5s;
  transition-property: opacity, background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:active) {
  opacity: 0.75;
  background: #f00;
  transition-delay: 0s, 0s;
  transition-duration: 1s, 1s;
  transition-property: opacity, background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
