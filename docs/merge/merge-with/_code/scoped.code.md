<div data-size="400" class="code-cont" data-example="scoped">
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

<div data-size="400" data-examples="stylus"></div>
```styl
ctr('.test', {
  $$: {
    component: {
      key: 'span'
      color: red
      font-size: 1em
    }
  }
  width: 200px
  components: {
    h1: {
      mergeWith: '$component$'
    }
    h2: {
      mergeWith: '$component$'
    }
  }
})
```

<div data-size="400" data-examples="yaml"></div>
```yaml
.test:
  $$:
    component:
      key: span
      color: red
      font-size: 1em
  width: 200px
  components:
    h1:
      mergeWith: $component$
    h2:
      mergeWith: $component$
```

```css
.test {
  width: 200px;
}
.test > h1 > span {
  color: #f00;
  font-size: 1em;
}
.test > h2 > span {
  color: #f00;
  font-size: 1em;
}
```
<div class="cf"></div>
