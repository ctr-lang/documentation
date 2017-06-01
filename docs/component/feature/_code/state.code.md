<div data-size="290" class="code-cont" data-example="state">
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


<div data-size="290" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  component: {
    key: 'section'
    font-size: 1em
    // state
    hover-on: {
      font-size: 2em
    }
  }
})
```

<div data-size="290" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  component:
    key: section
    font-size: 1em
    # state
    hover-on:
      font-size: 2em
```

```css
.test {
  width: 200px;
}
.test > section {
  font-size: 1em;
}
.test > section:hover {
  font-size: 2em;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: font-size;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
