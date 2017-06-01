<!-- gen:false -->

<div data-size="500" class="code-cont" data-example="set-variables">
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

<div data-size="500" data-examples="stylus"></div>
```styl
// sets internal ctr global variable 
ctrSetVariable({
  primaryColorPair: {
    color: red
    background: snow
  }
  secondaryColorPair: {
    color: blue
    background: antiquewhite
  }
})

ctr('.test', {
  width: 200px
  component-article: {
    component-h1: {
      merge: '$primaryColorPair$'
    }
    component-h3: {
      merge: '$secondaryColorPair$'
    }
  }
})
```

<div data-size="500" data-examples="yaml"></div>
```yaml
# sets internal ctr global variable
ctr:::setVariable:
  primaryColorPair:
    color: red
    background: snow
  secondaryColorPair:
    color: blue
    background: antiquewhite

.test:
  width: 200px
  component-article:
    component-h1:
      merge: $primaryColorPair$
    component-h3:
      merge: $secondaryColorPair$
```

```css
.test {
  width: 200px;
}
.test > article > h1 {
  color: #f00;
  background: #fffafa;
}
.test > article > h3 {
  color: #00f;
  background: #faebd7;
}
```
<div class="cf"></div>
