<div data-size="200" class="code-cont" data-example="empty">
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


<div data-size="200" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  transition: {
    option: {
      property: all
      duration: 1s
    }
  }
})
```

<div data-size="200" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  transition:
    option:
      property: all
      duration: 1s
```

```css
.test {
  width: 200px;
  transition-delay: 0s;
  transition-duration: 1s;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
