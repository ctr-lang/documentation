<div data-size="450" class="code-cont" data-example="basic">
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


<div data-size="450" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  components: {
    'span': {
      font-size: 1em
    }
    '#for': {
      font-size: 2em
    }
    '.linus': {
      selector: '+'
      font-size: 3em
    }
    random: {
      // specified key
      key: 'li'
      font-size: 4em
    }
  }
})
```

<div data-size="450" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  components:
    span:
      font-size: 1em
    '#for':
      font-size: 2em
    .linus:
      selector: +
      font-size: 3em
    random:
      # specified key
      key: li
      font-size: 4em
```

```css
.test {
  width: 200px;
}
.test > span {
  font-size: 1em;
}
.test > #for {
  font-size: 2em;
}
.test + .linus {
  font-size: 3em;
}
.test > li {
  font-size: 4em;
}
```
<div class="cf"></div>
