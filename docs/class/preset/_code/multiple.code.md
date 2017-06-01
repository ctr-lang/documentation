<!-- gen:false -->

<div data-size="950" class="code-cont" data-example="multiple">
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

<div data-size="950" data-examples="stylus"></div>
```styl
ctrSetClass('Box', {
  $$: {
    size: 200px
    background: red
    preset: {
      size: {
        small: {
          size: 100px
        }
        large: {
          size: 300px
        }
      }
      color: {
        primary: {
          background: blue
        }
        secondary: {
          background: black
        }
      }
    }
  }
  width: '$size$'
  height: '$size$'
  background: '$background$'
})

ctr('.test', {
  width: 200px
  components: {
    '.small-box': {
      extend-Box: {
        preset: 'size.small' 'color.secondary'
      }
    }
    '.large-box': {
      extend-Box: {
        // secondary will not overwrite primary
        preset: 'size.large' 'color.primary' 'color.secondary'
      }
    }
  }
})
```

<div data-size="950" data-examples="yaml"></div>
```yaml
ctr:::setClass:Box:
  $$:
    size: 200px
    background: red
    preset:
      size:
        small:
          size: 100px
        large:
          size: 300px
      color:
        primary:
          background: blue
        secondary:
          background: black
  width: $size$
  height: $size$
  background: $background$

.test:
  width: 200px
  components:
    .small-box:
      extend-Box:
        preset: [size.small, color.secondary]
    .large-box:
      extend-Box:
        # secondary will not overwrite primary
        preset: [size.large, color.primary, color.secondary]
```


```css
.test {
  width: 200px;
}
.test > .small-box {
  width: 100px;
  height: 100px;
  background: #000;
}
.test > .large-box {
  width: 300px;
  height: 300px;
  background: #00f;
}
```
<div class="cf"></div>
