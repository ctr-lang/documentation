<div data-size="300" class="code-cont" data-example="hyphenated-element">
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


<div data-size="300" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  element-after: {
    content: 'test'
    font-size: 1em
  }
  elm-first-child: {
    font-size: 2em
  }
  'element-nth-child(2)': {
    font-size: 3em
  }
})
```

<div data-size="300" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  element-after:
    content: test
    font-size: 1em
  elm-first-child:
    font-size: 2em
  element-nth-child(2):
    font-size: 3em
```

```css
.test {
  width: 200px;
}
.test::after {
  font-size: 1em;
  content: "test";
}
.test:first-child {
  font-size: 2em;
}
.test:nth-child(2) {
  font-size: 3em;
}
```
<div class="cf"></div>
