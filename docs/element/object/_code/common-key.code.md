<div data-size="490" class="code-cont" data-example="common-key">
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


<div data-size="490" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  elements: {
    // merged into each element
    common: {
      font-size: 1em
    }
    first-child: {
      color: red
    }
    last-child: {
      color: blue
    }
    darkTournament: {
      option: {
        // will be key
        key: 'nth-child(2)'
      }
      color: black
    }
  }
})
```

<div data-size="490" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  elements:
    # merged into each element
    common:
      font-size: 1em
    first-child:
      color: red
    last-child:
      color: blue
    darkTournament:
      option:
        # will be key
        key: nth-child(2)
      color: black
```

```css
.test {
  width: 200px;
}
.test:first-child {
  color: #f00;
  font-size: 1em;
}
.test:last-child {
  color: #00f;
  font-size: 1em;
}
.test:nth-child(2) {
  color: #000;
  font-size: 1em;
}
```
<div class="cf"></div>
