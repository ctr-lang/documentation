<div data-size="260" class="code-cont" data-example="custom-component">
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


<div data-size="260" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  customCompOne: {
    key: '.one'
    font-size: 1em
  }
  customCompTwo: {
    key: '#two'
    font-size: 2em
  }
})
```

<div data-size="260" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  customCompOne:
    key: .one
    font-size: 1em
  customCompTwo:
    key: '#two'
    font-size: 2em
```

```css
.test {
  width: 200px;
}
.test > .one {
  font-size: 1em;
}
.test > #two {
  font-size: 2em;
}
```
<div class="cf"></div>
