<div data-size="400" class="code-cont" data-example="child">
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
ctr('.test', {
  width: 200px
  // creates a `> li` selector
  'component-li': {
    first-child: {
      font-size: 1em
    }
    last-child: {
      font-size: 2em
    }
    'nth-child(2)': {
      font-size: 3em
    }
    'nth-child(22)': {
      font-size: 4em
    }
  } 
})
```

<div data-size="400" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  # creates a `> li` selector
  component-li:
    first-child:
      font-size: 1em
    last-child:
      font-size: 2em
    nth-child(2):
      font-size: 3em
    nth-child(22):
      font-size: 4em
```

```css
.test {
  width: 200px;
}
.test > li:first-child {
  font-size: 1em;
}
.test > li:last-child {
  font-size: 2em;
}
.test > li:nth-child(2) {
  font-size: 3em;
}
.test > li:nth-child(22) {
  font-size: 4em;
}
```
<div class="cf"></div>
