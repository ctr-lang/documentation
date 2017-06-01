<div data-size="150" class="code-cont" data-example="perspective">
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
    perspective: 600
  }
})
```

<div data-size="150" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  matrix:
    perspective: 600
```

```css
.test {
  width: 200px;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.00166667, 0, 0, 0, 1);
}
```
<div class="cf"></div>
