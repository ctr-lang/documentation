<div data-size="340" class="code-cont" data-example="media-A">
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


<div data-size="340" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  hover-on: {
    height: 400px
    // media
    media-md: {
      height: 300px
    }
  }
})
```

<div data-size="340" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  hover-on:
    height: 400px
    # media
    media-md:
      height: 300px
```

```css
.test {
  width: 200px;
}
.test:hover {
  height: 400px;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: height;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
@media (min-width: 600px) and (max-width: 800px) {
  .test:hover {
    height: 300px;
  }
}
```
<div class="cf"></div>
