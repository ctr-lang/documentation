<div data-size="230" class="code-cont" data-example="component">
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
  first-child: {
    height: 400px
    // component
    component-span: {
      font-size: 1em
    }
  }
})
```

<div data-size="230" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  first-child:
    height: 400px
    # component
    component-span:
      font-size: 1em
```

```css
.test {
  width: 200px;
}
.test:first-child {
  height: 400px;
}
.test:first-child > span {
  font-size: 1em;
}
```
<div class="cf"></div>
