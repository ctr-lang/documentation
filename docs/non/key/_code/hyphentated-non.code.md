<div data-size="250" class="code-cont" data-example="hyphentated-non">
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
  width: 100px
  'non-.bad': {
    font-size: 1em
  }
  // Does not have to be String but...
  // better be safe than sorry
  'not-span': {
    font-size: 2em
  }
})
```

<div data-size="250" data-examples="yaml"></div>
```yaml
.test:
  width: 100px
  non-.bad:
    font-size: 1em
  # Does not have to be String but...
  # better be safe than sorry
  not-span:
    font-size: 2em
```

```css
.test {
  width: 100px;
}
.test:not(.bad) {
  font-size: 1em;
}
.test:not(span) {
  font-size: 2em;
}
```
<div class="cf"></div>
