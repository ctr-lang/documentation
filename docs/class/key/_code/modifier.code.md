<!-- gen:false -->

<div data-size="490" class="code-cont" data-example="modifier">
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

<div data-size="490" data-examples="stylus"></div>
```styl
ctrSetClass('HoverSingle', {
  $$: {
    property: 'background'
    value: blue
  }
  hover: {
    $property$: '$value$'
  }
})

ctr('.test', {
  width: 200px
  extend: {
    HoverSingle: {
      value: red
    }
    'HoverSingle:::color': {
      property: color
      value: red
    }
  }
})
```

<div data-size="490" data-examples="yaml"></div>
```yaml
ctr:::setClass:HoverSingle:
  $$:
    property: background
    value: blue
  hover:
    $property$: $value$

.test:
  width: 200px
  extend:
    HoverSingle:
      value: red
    HoverSingle:::color:
      property: color
      value: red
```


```css
.test {
  width: 200px;
}
.test:hover {
  color: #f00;
  background: #f00;
  transition-delay: 0s, 0s;
  transition-duration: 0.5s, 0.5s;
  transition-property: color, background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:hover) {
  transition-delay: 0s, 0s;
  transition-duration: 0.5s, 0.5s;
  transition-property: color, background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
