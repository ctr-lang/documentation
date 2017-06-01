<div data-size="225" class="code-cont" data-example="multiple">
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


<div data-size="225" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  matrix: {
    perspective: 600
    rotateX: 60deg
    rotateY: 45deg
    rotateZ: 60deg
    translateX: 200
  }
})
```

<div data-size="225" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  matrix:
    perspective: 600
    rotateX: 60deg
    rotateY: 45deg
    rotateZ: 60deg
    translateX: 200
```

```css
.test {
  width: 200px;
  transform: matrix3d(0.35355124, 0.73919739, 0.5732266, -0.00095538, -0.61237218, -0.28033468, 0.73919739, -0.001232, 0.70710808, -0.61237218, 0.35355124, -0.00058925, 70.71024834, 147.83947838, 114.64532007, 0.80892447);
}
```
<div class="cf"></div>
