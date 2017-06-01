<div data-size="250" class="code-cont" data-example="custom-non">
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


<div data-size="250" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  customNon: {
    key: 'span'
    font-size: 1em
  }
  customNotWrap: {
    key: '#x-or-y'
    font-size: 2em
  }
})
```

<div data-size="250" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  customNon:
    key: span
    font-size: 1em
  customNotWrap:
    key: '#x-or-y'
    font-size: 2em
```

```css
.test {
  width: 200px;
}
.test:not(span) {
  font-size: 1em;
}
.test:not(#x-or-y) {
  font-size: 2em;
}
```
<div class="cf"></div>
