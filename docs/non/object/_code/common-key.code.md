<div data-size="400" class="code-cont" data-example="common-key">
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
  nons: {
    '.pentagon': {
      font-size: 1em
    }
    '.nonagon': {
      font-size: 2em
    }
    '#pentadecagon': {
      font-size: 3em
    }
    common: {
      border-radius: 4px
    }
  }
})
```

<div data-size="400" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  nons:
    .pentagon:
      font-size: 1em
    .nonagon:
      font-size: 2em
    '#pentadecagon':
      font-size: 3em
    common:
      border-radius: 4px
```

```css
.test {
  width: 200px;
}
.test:not(.pentagon) {
  font-size: 1em;
  border-radius: 4px;
}
.test:not(.nonagon) {
  font-size: 2em;
  border-radius: 4px;
}
.test:not(#pentadecagon) {
  font-size: 3em;
  border-radius: 4px;
}
```
<div class="cf"></div>
