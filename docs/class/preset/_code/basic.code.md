<!-- gen:false -->

<div data-size="680" class="code-cont" data-example="basic">
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

<div data-size="680" data-examples="stylus"></div>
```styl
ctrSetClass('Box', {
  $$: {
    size: 200px
    preset: {
      small: {
        size: 100px
      }
      large: {
        size: 300px
      }
    }
  }
  width: '$size$'
  height: '$size$'
})

ctr('.test', {
  width: 200px
  components: {
    '.small-box': {
      extend-Box: {
        preset: 'small'
      }
    }
    '.large-box': {
      extend-Box: {
        preset: 'large'
      }
    }
  }
})
```

<div data-size="680" data-examples="yaml"></div>
```yaml
ctr:::setClass:Box:
  $$:
    size: 200px
    preset:
      small:
        size: 100px
      large:
        size: 300px
  width: $size$
  height: $size$

.test:
  width: 200px
  components:
    .small-box:
      extend-Box:
        preset: small
    .large-box:
      extend-Box:
        preset: large
```


```css
.test {
  width: 200px;
}
.test > .small-box {
  width: 100px;
  height: 100px;
}
.test > .large-box {
  width: 300px;
  height: 300px;
}
```
<div class="cf"></div>
