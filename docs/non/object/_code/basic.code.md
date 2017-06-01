<div data-size="350" class="code-cont" data-example="basic">
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


<div data-size="350" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  nons: {
    notThe: {
      key: '.the'
      font-size: 1em
    }
    '#BlackSwan': {
      font-size: 2em
    }
    '.phenomenon': {
      font-size: 3em
    }
  }
})
```

<div data-size="350" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  nons:
    notThe:
      key: .the
      font-size: 1em
    '#BlackSwan':
      font-size: 2em
    .phenomenon:
      font-size: 3em
```

```css
.test {
  width: 200px;
}
.test:not(.the) {
  font-size: 1em;
}
.test:not(#BlackSwan) {
  font-size: 2em;
}
.test:not(.phenomenon) {
  font-size: 3em;
}
```
<div class="cf"></div>
