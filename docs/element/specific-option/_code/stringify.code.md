<div data-size="230" class="code-cont" data-example="stringify">
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


<div data-size="230" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  counter-increment: linenumber
  before: {
    option: {
      stringify: false
    }
    content: counter(linenumber)
  }
})
```

<div data-size="230" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  counter-increment: linenumber
  before:
    option:
      stringify: false
    content: counter(linenumber)
```

```css
.test {
  width: 200px;
  counter-increment: linenumber;
}
.test::before {
  content: counter(linenumber);
}
```
<div class="cf"></div>
