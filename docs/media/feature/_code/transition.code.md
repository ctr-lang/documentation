<div data-size="300" class="code-cont" data-example="transition">
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


<div data-size="300" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  media-md: {
    width: 400px
    // transition
    transition: {
      height: 400px
    }
  }
})
```

<div data-size="300" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  media-md:
    width: 400px
    # transition
    transition:
      height: 400px
```

```css
.test {
  width: 200px;
}
@media (min-width: 600px) and (max-width: 800px) {
  .test {
    width: 400px;
    height: 400px;
    transition-delay: 0s;
    transition-duration: 0.5s;
    transition-property: height;
    transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  }
}
```
<div class="cf"></div>
