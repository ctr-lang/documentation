<!-- gen:false -->

<div data-size="300" class="code-cont" data-example="set-variables">
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

<div data-size="300" data-examples="stylus"></div>
```styl
// sets internal ctr global variable 
ctrSetVariable({
  component: {
    key: 'span'
    font-size: 1em
    background: red
  }
})

ctr('.test', {
  width: 200px
  mergeWith: '$component$'
})
```

<div data-size="300" data-examples="yaml"></div>
```yaml
# sets internal ctr global variable 
ctr:::setVariable:
  component:
    key: span
    font-size: 1em
    background: red

.test:
  width: 200px
  mergeWith: $component$
```

```css
.test {
  width: 200px;
}
.test > span {
  font-size: 1em;
  background: #f00;
}
```
<div class="cf"></div>
