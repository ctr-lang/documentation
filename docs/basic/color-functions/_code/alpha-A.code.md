<div data-size="120" class="code-cont" data-example="alpha-A">
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


<div data-size="120" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  //  Returning the alpha component
  opacity: alpha(rgba(0, 128, 128, 0.75))
})
```

<div data-size="120" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  #  Returning the alpha component
  opacity: alpha(rgba(0, 128, 128, 0.75))
```

```css
.test {
  width: 200px;
  opacity: 0.75;
}
```
<div class="cf"></div>
