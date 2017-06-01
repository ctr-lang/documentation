<!-- gen:false -->

<div data-size="830" class="code-cont" data-example="common-specific">
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

<div data-size="830" data-examples="stylus"></div>
```styl
ctrSetClass('BackgroundOnHover', {
  $$: {
    opacity: 1
    background: red
  }
  hover-on: {
    opacity: '$opacity$'
    background: '$background$'
  }
})

ctrSetClass('BackgroundOnFocus', {
  $$: {
    opacity: 1
    background: red
  }
  focus-on: {
    opacity: '$opacity$'
    background: '$background$'
  }
})


ctr('.test', {
  width: 200px
  extend: {
    $$: {
      // only targets - BackgroundOnHover
      class: 'BackgroundOnHover'
      opacity: 0.5
    }
    // BackgroundOnHover still needs to be specified
    class: 'BackgroundOnHover'
    // Will not pick up opactiy: 0.5
    BackgroundOnFocus: {
      background: blue
    }
  }
})
```

<div data-size="830" data-examples="yaml"></div>
```yaml
ctr:::setClass:BackgroundOnHover:
  $$:
    opacity: 1
    background: red
  hover-on:
    opacity: $opacity$
    background: $background$

ctr:::setClass:BackgroundOnFocus:
  $$:
    opacity: 1
    background: red
  focus-on:
    opacity: $opacity$
    background: $background$


.test:
  width: 200px
  extend:
    $$:
      # only targets - BackgroundOnHover
      class: BackgroundOnHover
      opacity: 0.5
    # BackgroundOnHover still needs to be specified
    class: BackgroundOnHover
    # Will not pick up opactiy: 0.5
    BackgroundOnFocus:
      background: blue
```


```css
.test {
  width: 200px;
}
.test:hover {
  opacity: 0.5;
  background: #f00;
  transition-delay: 0s, 0s;
  transition-duration: 0.5s, 0.5s;
  transition-property: opacity, background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
.test:focus {
  opacity: 1;
  background: #00f;
  transition-delay: 0s, 0s;
  transition-duration: 0.5s, 0.5s;
  transition-property: opacity, background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
