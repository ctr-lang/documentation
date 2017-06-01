<div data-size="390" class="code-cont" data-example="auto-gen">
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

<div data-size="390" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  link: {
    option: {
      autoGen: true
    }
    on: {
      color: red
    }
    non: {
      color: blue
    }
  }
})
```

<div data-size="390" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  link:
    option:
      autoGen: true
    on:
      color: red
    non:
      color: blue
```

```css
.test {
  width: 200px;
}
.test:link {
  color: #f00;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: color;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:link) {
  color: #00f;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: color;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
