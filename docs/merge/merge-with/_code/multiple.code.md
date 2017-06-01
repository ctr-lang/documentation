<div data-size="400" class="code-cont" data-example="multiple">
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
    customStateOpacity: {
      key: 'hover'
      on: {
        opacity: 1
      }
    }
    customStateColor: {
      key: 'hover'
      on: {
        color: red
      }
    }
  }
  width: 200px
  mergeWith: '$customStateOpacity$' '$customStateColor$'
})
```

<div data-size="400" data-examples="yaml"></div>
```yaml
.test:
  $$:
    customStateOpacity:
      key: hover
      on:
        opacity: 1
    customStateColor:
      key: hover
      on:
        color: red
  width: 200px
  mergeWith: [$customStateOpacity$, $customStateColor$]
```

```css
.test {
  width: 200px;
}
.test:hover {
  opacity: 1;
  color: #f00;
  transition-delay: 0s, 0s;
  transition-duration: 0.5s, 0.5s;
  transition-property: color, opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
