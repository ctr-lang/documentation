<div data-size="750" class="code-cont" data-example="usage">
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


<div data-size="750" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  // filter preset
  filter: 'walden'
})
```

<div data-size="750" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  # filter preset
  filter: walden
```

```css
.test {
  width: 200px;
  position: relative;
  filter: brightness(1.1) hue-rotate(-10deg) sepia(0.3) saturate(1.6);
}
.test img {
  z-index: 1;
  width: 100%;
}
.test::before {
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  content: "";
  display: block;
  position: absolute;
  background: #04c;
  pointer-events: none;
  mix-blend-mode: screen;
}
.test::after {
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  content: "";
  display: block;
  position: absolute;
  pointer-events: none;
}
```
<div class="cf"></div>
