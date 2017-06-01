<div data-size="320" class="code-cont" data-example="true-value">
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


<div data-size="320" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  components: {
    common: {
      font-size: 2em
      height: 400px
    }
    '.one': {
      opacity: 1
    }
    // inherits common
    '.two': true
  }
})
```

<div data-size="320" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  components:
    common:
      font-size: 2em
      height: 400px
    .one:
      opacity: 1
    # inherits common
    .two: true
```

```css
.test {
  width: 200px;
}
.test > .one {
  opacity: 1;
  height: 400px;
  font-size: 2em;
}
.test > .two {
  height: 400px;
  font-size: 2em;
}
```
<div class="cf"></div>
