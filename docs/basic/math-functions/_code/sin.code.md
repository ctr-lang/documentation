<div data-size="100" class="code-cont" data-example="sin">
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
  transform: rotate(unit(sin(3*PI/4), deg))
})
```

<div data-size="100" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  transform: rotate(unit(sin(3*PI/4), deg))
```

```css
.test {
  width: 200px;
  transform: rotate(0.707106781deg);
}
```
<div class="cf"></div>
