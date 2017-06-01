<div data-size="260" class="code-cont" data-example="element">
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


<div data-size="260" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  component: {
    key: 'section'
    font-size: 1em
    // element
    before: {
      content: 'test'
    }
  }
})
```

<div data-size="260" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  component:
    key: section
    font-size: 1em
    # element
    before:
      content: test
```

```css
.test {
  width: 200px;
}
.test > section {
  font-size: 1em;
}
.test > section::before {
  content: "test";
}
```
<div class="cf"></div>
