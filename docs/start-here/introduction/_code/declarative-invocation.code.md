<div data-size="360" class="code-cont" data-example="declarative-invocation">
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
ctr('.aClass', {
  width: 200px
  height: 200px
})

ctr('#aId', {
  width: 200px
  height: 200px
  background: red
})

ctr('#aId span', {
  width: 200px
  font-size: 1em
})
```

<div data-size="360" data-examples="yaml"></div>
```yaml
.aClass:
  width: 200px
  height: 200px
'#aId':
  width: 200px
  height: 200px
  background: red
'#aId span':
  width: 200px
  font-size: 1em
```

```css
.aClass {
  width: 200px;
  height: 200px;
}
#aId {
  width: 200px;
  height: 200px;
  background: #f00;
}
#aId span {
  width: 200px;
  font-size: 1em;
}
```
<div class="cf"></div>
