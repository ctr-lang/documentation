<div data-size="450" class="code-cont" data-example="hyphenated-component">
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
  'component-span': {
    font-size: 1em
  }
  'component-.class': {
    font-size: 2em
  }
  'comp-p': {
    font-size: 3em
  }
  'comp-#id': {
    font-size: 4em
  }
  'comp-h1': {
    // key overrides hyphenated value
    key: '.override'
    font-size: 5em
  }
})
```

<div data-size="450" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  component-span:
    font-size: 1em
  component-.class:
    font-size: 2em
  comp-p:
    font-size: 3em
  comp-#id:
    font-size: 4em
  comp-h1:
    # key overrides hyphenated value
    key: .override
    font-size: 5em
```

```css
.test {
  width: 200px;
}
.test > span {
  font-size: 1em;
}
.test > .class {
  font-size: 2em;
}
.test > p {
  font-size: 3em;
}
.test > #id {
  font-size: 4em;
}
.test > .override {
  font-size: 5em;
}
```
<div class="cf"></div>
