<div data-size="240" class="code-cont" data-example="non">
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


<div data-size="240" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  first-child: {
    height: 400px
    // non
    non-span: {
      font-size: 1em
    }
  }
})
```

<div data-size="240" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  first-child:
    height: 400px
    # non
    non-span:
      font-size: 1em
```

```css
.test {
  width: 200px;
}
.test:first-child {
  height: 400px;
}
.test:first-child:not(span) {
  font-size: 1em;
}
```
<div class="cf"></div>
