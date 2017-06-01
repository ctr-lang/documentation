<div data-size="325" class="code-cont" data-example="auto-gen">
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

<div data-size="325" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  animation: {
    option: {
      name: 'noGenProps'
      autoGen: false
    }
    timeline: {
      '50%': {
        background: green
      }
    }
  }
})
```

<div data-size="325" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  animation:
    option:
      name: noGenProps
      autoGen: false
    timeline:
      50%:
        background: green
```

```css
.test {
  width: 200px;
}
@keyframes noGenProps {
  50% {
    background: #008000;
  }
}
```
<div class="cf"></div>
