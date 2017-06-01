<div data-size="570" class="code-cont" data-example="appendKey-chain">
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


<div data-size="570" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  components: {
    '.one': {
      font-size: 1em
      'component-.two': {
        option: {
          appendKey: true
        }
        font-size: 2em
      }
    }
    '.three': {
      option: {
        appendKey: true
      }
      font-size: 3em
      'component-.four': {
        option: {
          appendKey: true
        }
        font-size: 4em
      }
    }
  }
})
```

<div data-size="570" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  components:
    .one:
      font-size: 1em
      component-.two:
        option:
          appendKey: true
        font-size: 2em
    .three:
      option:
        appendKey: true
      font-size: 3em
      component-.four:
        option:
          appendKey: true
        font-size: 4em
```

```css
.test {
  width: 200px;
}
.test > .one {
  font-size: 1em;
}
.test.three {
  font-size: 3em;
}
.test > .one.two {
  font-size: 2em;
}
.test.three.four {
  font-size: 4em;
}
```
<div class="cf"></div>
