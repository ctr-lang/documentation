<div data-size="200" class="code-cont" data-example="center">
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
  align: 'center'
})
```

<div data-size="200" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  align: center
```

```css
.test {
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  width: 200px;
  position: absolute;
  transform: translate(-50%, -50%);
}
```
<div class="cf"></div>
