<div data-size="200" class="code-cont" data-example="bottom-left">
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
  align: 'bottom-left'
})
```

<div data-size="200" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  align: bottom-left
```

```css
.test {
  left: 0;
  bottom: 0;
  top: auto;
  right: auto;
  width: 200px;
  position: absolute;
  transform: translate(0, 0);
}
```
<div class="cf"></div>
