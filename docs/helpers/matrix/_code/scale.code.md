<div data-size="150" class="code-cont" data-example="scale">
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


<div data-size="150" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  matrix: {
    scale: 1.5 2
  }
})
```

<div data-size="150" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  matrix:
    scale: [1.5, 2]
```

```css
.test {
  width: 200px;
  transform: matrix3d(1.5, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
```
<div class="cf"></div>
