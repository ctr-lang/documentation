<div data-size="200" class="code-cont" data-example="top-right">
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
  align: 'top-right'
})
```

<div data-size="200" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  align: top-right
```

```css
.test {
  top: 0;
  right: 0;
  left: auto;
  bottom: auto;
  width: 200px;
  position: absolute;
  transform: translate(0, 0);
}
```
<div class="cf"></div>
