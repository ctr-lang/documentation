<div data-size="500" class="code-cont" data-example="scoped">
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

<div data-size="500" data-examples="stylus"></div>
```styl
ctr('.test', {
  $$: {
    fontHeader: {
      font-family: 'Ubuntu'
    }
    fontBody: {
      font-family: 'Lato'
    }
    fontStyle: {
      font-weight: normal
      font-style: normal
      font-size: 1em
      color: black
    }
  }
  width: 200px
  font-size: 1.2em
  merge: '$fontHeader$' '$fontStyle$'
  'component-.bodyText': {
    color: gray
    merge: '$fontBody$' '$fontStyle$'
  }
})
```

<div data-size="500" data-examples="yaml"></div>
```yaml
.test:
  $$:
    fontHeader:
      font-family: Ubuntu
    fontBody:
      font-family: Lato
    fontStyle:
      font-weight: normal
      font-style: normal
      font-size: 1em
      color: black
  width: 200px
  font-size: 1.2em
  merge: [$fontHeader$, $fontStyle$]
  component-.bodyText:
    color: gray
    merge: [$fontBody$, $fontStyle$]
```

```css
.test {
  color: #000;
  width: 200px;
  font-size: 1.2em;
  font-style: normal;
  font-family: Ubuntu;
  font-weight: normal;
}
.test > .bodyText {
  color: #808080;
  font-size: 1em;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
}
```
<div class="cf"></div>
