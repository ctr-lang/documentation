<div data-size="200" class="code-cont" data-example="top">
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
  align: 'top'
})
```

<div data-size="200" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  align: top
```

```css
.test {
  top: 0;
  left: 50%;
  right: auto;
  bottom: auto;
  width: 200px;
  position: absolute;
  transform: translate(-50%, 0);
}
```
<div class="cf"></div>
