<div data-size="340" class="code-cont" data-example="type">
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


<div data-size="340" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  // creates a `> li` selector
  'component-li': {
    first-of-type: {
      font-size: 1em
    }
    last-of-type: {
      font-size: 2em
    }
    'nth-last-of-type(2)': {
      font-size: 3em
    }
  } 
})
```

<div data-size="340" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  # creates a `> li` selector
  component-li:
    first-of-type:
      font-size: 1em
    last-of-type:
      font-size: 2em
    nth-last-of-type(2):
      font-size: 3em
```

```css
.test {
  width: 200px;
}
.test > li:first-of-type {
  font-size: 1em;
}
.test > li:last-of-type {
  font-size: 2em;
}
.test > li:nth-last-of-type(2) {
  font-size: 3em;
}
```
<div class="cf"></div>
