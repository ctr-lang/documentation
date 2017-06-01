<div data-size="360" class="code-cont" data-example="instance-based">
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

<div data-size="360" data-examples="stylus"></div>
```styl
ctr('.test', {
  // must be declared in the root
  option: {
    global: {
      sort: '-len'
    }
    hover: {
      duration: 2s
    }
  }
  width: 200px
  hover: {
    background: green
  }
})
```

<div data-size="360" data-examples="yaml"></div>
```yaml
.test:
  # must be declared in the root
  option:
    global:
      sort: -len
    hover:
      duration: 2s
  width: 200px
  hover:
    background: green
```

```css
.test {
  width: 200px;
}
.test:hover {
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  transition-property: background;
  transition-duration: 2s;
  transition-delay: 0s;
  background: #008000;
}
.test:not(:hover) {
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  transition-property: background;
  transition-duration: 2s;
  transition-delay: 0s;
}
```
<div class="cf"></div>
