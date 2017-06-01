<div data-size="175" class="code-cont" data-example="transform">
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


<div data-size="175" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  transform: {
    translateX: 10px
    translateY: 20px
    scaleX: 90deg
  }
})
```

<div data-size="175" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  transform:
    translateX: 10px
    translateY: 20px
    scaleX: 90deg
```

```css
.test {
  width: 200px;
  transform: translateX(10px) translateY(20px) scaleX(90deg);
}
```
<div class="cf"></div>
