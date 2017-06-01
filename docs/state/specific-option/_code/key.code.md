<div data-size="250" class="code-cont" data-example="key">
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

<div data-size="250" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  state: {
    option: {
      key: 'focus'
    }
    on: {
      height: 300px
    }
  }
})
```

<div data-size="250" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  state:
    option:
      key: focus
    on:
      height: 300px
```

```css
.test {
  width: 200px;
}
.test:focus {
  height: 300px;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: height;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
