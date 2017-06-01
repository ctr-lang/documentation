<div data-size="200" class="code-cont" data-example="top-left">
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
  align: 'top-left'
})
```

<div data-size="200" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  align: top-left
```

```css
.test {
  top: 0;
  left: 0;
  right: auto;
  bottom: auto;
  width: 200px;
  position: absolute;
  transform: translate(0, 0);
}
```
<div class="cf"></div>
