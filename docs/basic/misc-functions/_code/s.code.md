<div data-size="100" class="code-cont" data-example="s">
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


<div data-size="100" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  transform: s("translate(%s, %s)", 10px, 20px)
})
```

<div data-size="100" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  transform: s("translate(%s, %s)", 10px, 20px)
```

```css
.test {
  width: 200px;
  transform: translate(10px, 20px);
}
```
<div class="cf"></div>
