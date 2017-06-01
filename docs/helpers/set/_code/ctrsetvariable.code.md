<!-- gen:false -->

<div data-size="400" class="code-cont" data-example="ctrsetvariable">
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


<div data-size="400" data-examples="stylus"></div>
```styl
ctrSetVariable({
  red: #c0392b
  white: #ecf0f1
})

ctr('.test', {
  width: 200px
  color: '$white$'
  background: '$red$'
})
```

<div data-size="400" data-examples="yaml"></div>
```yaml
ctr:::setVariable:
  red: '#c0392b'
  white: '#ecf0f1'

.test:
  width: 200px
  color: $white$
  background: $red$
```

```css
.test {
  width: 200px;
  color: #ecf0f1;
  background: #c0392b;
}
```
<div class="cf"></div>
