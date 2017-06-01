<div data-size="200" class="code-cont" data-example="bottom">
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
  align: 'bottom'
})
```

<div data-size="200" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  align: bottom
```

```css
.test {
  bottom: 0;
  left: 50%;
  top: auto;
  right: auto;
  width: 200px;
  position: absolute;
  transform: translate(-50%, 0);
}
```
<div class="cf"></div>
