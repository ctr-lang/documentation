<div data-size="220" class="code-cont" data-example="sibling-reference">
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


<div data-size="220" data-examples="stylus"></div>
```styl
ctr('.test', {
  $$: {
    size: 12
    type: 'rem'
    font-size: 'calc($[size]$$[type]$ * ((100vw - 25rem) / 87.5))'
  }
  width: 200px
  font-size: '$font-size$'
})
```

<div data-size="220" data-examples="yaml"></div>
```yaml
.test:
  $$:
    size: 12
    type: rem
    font-size: calc($[size]$$[type]$ * ((100vw - 25rem) / 87.5))
  width: 200px
  font-size: $font-size$
```

```css
.test {
  width: 200px;
  font-size: calc(12rem * ((100vw - 25rem) / 87.5));
}
```
<div class="cf"></div>
