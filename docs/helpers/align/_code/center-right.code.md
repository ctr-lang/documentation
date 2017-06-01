<div data-size="200" class="code-cont" data-example="center-right">
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
  align: 'center-right'
})
```

<div data-size="200" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  align: center-right
```

```css
.test {
  right: 0;
  top: 50%;
  left: auto;
  bottom: auto;
  width: 200px;
  position: absolute;
  transform: translate(0, -50%);
}
```
<div class="cf"></div>
