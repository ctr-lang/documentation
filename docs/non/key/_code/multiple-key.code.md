<div data-size="225" class="code-cont" data-example="multiple-key">
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


<div data-size="225" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  non: {
    key: '.today' 'span'
    font-size: 1em
  }
})
```

<div data-size="225" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  non:
    key: [.today, span]
    font-size: 1em
```

```css
.test {
  width: 200px;
}
.test:not(.today) {
  font-size: 1em;
}
.test:not(span) {
  font-size: 1em;
}
```
<div class="cf"></div>
