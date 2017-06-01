<div data-size="325" class="code-cont" data-example="multiple-key-merge">
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


<div data-size="325" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  customNon: {
    key: '.today' 'span'
    font-size: 1em
  }
  'non-p': {
    color: red
    font-size: 2em
  }
  'non-.today': {
    color: blue
  }
})
```

<div data-size="325" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  customNon:
    key: [.today, span]
    font-size: 1em
  non-p:
    color: red
    font-size: 2em
  non-.today:
    color: blue
```

```css
.test {
  width: 200px;
}
.test:not(.today) {
  color: #00f;
  font-size: 1em;
}
.test:not(span) {
  font-size: 1em;
}
.test:not(p) {
  color: #f00;
  font-size: 2em;
}
```
<div class="cf"></div>
