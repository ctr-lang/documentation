<!-- gen:false -->

<div data-size="630" class="code-cont" data-example="specific">
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

<div data-size="630" data-examples="stylus"></div>
```styl
// sets global variable
ctrSetVariable({
  primary-bg: #f00
})

// sets class
ctrSetClass('Box', {
  $$: {
    width: 200px
    height: 200px
    border-radius: 4px
  }
  width: '$width$'
  height: '$height$'
  background: '$primary-bg$'
  // private variable
  border-radius: '_$border-radius$_'
})

ctr('.test', {
  font-size: 1em
  extend: {
    Box: {
      height: 400px
      border-radius: 8px
      primary-bg: #00f
    }
  }
})
```

<div data-size="630" data-examples="yaml"></div>
```yaml
# sets global variable
ctr:::setVariable:
  primary-bg: '#f00'

# sets class
ctr:::setClass:Box:
  $$:
    width: 200px
    height: 200px
    border-radius: 4px
  width: $width$
  height: $height$
  background: $primary-bg$
  # private variable
  border-radius: _$border-radius$_

.test:
  font-size: 1em
  extend:
    Box:
      height: 400px
      border-radius: 8px
      primary-bg: '#00f'
```


```css
.test {
  width: 200px;
  height: 400px;
  font-size: 1em;
  background: #00f;
  border-radius: 8px;
}
```
<div class="cf"></div>
