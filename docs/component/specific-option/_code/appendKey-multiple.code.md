<div data-size="280" class="code-cont" data-example="appendKey-multiple">
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


<div data-size="280" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  component: {
    option: {
      appendKey: true
      key: '.appendMe' '.please' '#beebes'
    }
    font-size: 2em
  }
})
```

<div data-size="280" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  component:
    option:
      appendKey: true
      key: [.appendMe, .please, '#beebes']
    font-size: 2em
```

```css
.test {
  width: 200px;
}
.test.appendMe {
  font-size: 2em;
}
.test.please {
  font-size: 2em;
}
.test#beebes {
  font-size: 2em;
}
```
<div class="cf"></div>
