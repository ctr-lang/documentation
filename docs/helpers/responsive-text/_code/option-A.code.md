<!-- gen:false -->

<div data-size="375" class="code-cont" data-example="option-A">
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


<div data-size="375" data-examples="stylus"></div>
```styl
// global option
ctrSetOption({
  type: {
    rootSize: 18px
    fontSize: {
      minSize: 1em
      maxSize: 3em
      minWidth: 300px
      maxWidth: 900px
    }
  }
})

ctr('.test', {
  width: 200px
  font-size: 'responsive'
})
```

<div data-size="375" data-examples="yaml"></div>
```yaml
# global option
ctr:::setOption:
  type:
    rootSize: 18px
    fontSize:
      minSize: 1em
      maxSize: 3em
      minWidth: 300px
      maxWidth: 900px

.test:
  width: 200px
  font-size: responsive
```

```css
.test {
  width: 200px;
  font-size: calc(1em + 2 * ((100vw - 16.667em) / 33.333));
}
@media only screen and (max-width: 300px) {
  .test {
    font-size: 1em;
  }
}
@media only screen and (min-width: 900px) {
  .test {
    font-size: 3em;
  }
}
```
<div class="cf"></div>
