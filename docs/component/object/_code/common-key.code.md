<!-- gen:false -->

<div data-size="530" class="code-cont" data-example="common-key">
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


<div data-size="530" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  components: {
    // merged into each component
    common: {
      selector: '~'
      background: red
    }
    '.99Bottles': {
      font-size: 1em
    }
    '#ofBeer': {
      font-size: 2em
    }
    '.onTheWall': {
      font-size: 3em
    }
    random: {
      // specified key
      key: 'li + .takeOneDown'
      font-size: 4em
    }
  }
})
```

<div data-size="530" data-examples="yaml"></div>
```yaml
'.test':
  width: 200px
  components:
    # merged into each component
    common:
      selector: '~'
      background: red
    '.99Bottles':
      font-size: 1em
    '#ofBeer':
      font-size: 2em
    '.onTheWall':
      font-size: 3em
    random:
      # specified key
      key: 'li + .takeOneDown'
      font-size: 4em
```

```css
.test {
  width: 200px;
}
.test ~ .99Bottles {
  font-size: 1em;
  background: #f00;
}
.test ~ #ofBeer {
  font-size: 2em;
  background: #f00;
}
.test ~ .onTheWall {
  font-size: 3em;
  background: #f00;
}
.test ~ li + .takeOneDown {
  font-size: 4em;
  background: #f00;
}
```
<div class="cf"></div>
