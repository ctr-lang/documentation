<!-- gen:false -->

<div data-size="530" class="code-cont" data-example="property-variable">
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

<div data-size="530" data-examples="stylus"></div>
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
    hoverBackground: {
      class: 'HoverSingle'
      value: red
    }
    hoverColor: {
      class: 'HoverSingle'
      property: color
      value: red
    }
  }
})
```

<div data-size="530" data-examples="yaml"></div>
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
    hoverBackground:
      class: HoverSingle
      value: red
    hoverColor:
      class: HoverSingle
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
