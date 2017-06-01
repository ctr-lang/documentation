<div data-size="410" class="code-cont" data-example="media-B">
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


<div data-size="410" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  transition: {
    opacity: 1
    // new property and option
    media-md: {
      option: {
        duration: 1s
      }
      height: 300px
      opacity: 1
    }
  }
})
```

<div data-size="410" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  transition:
    opacity: 1
    # new property and option
    media-md:
      option:
        duration: 1s
      height: 300px
      opacity: 1
```

```css
.test {
  opacity: 1;
  width: 200px;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
@media (min-width: 600px) and (max-width: 800px) {
  .test {
    opacity: 1;
    height: 300px;
    transition-delay: 0s, 0s;
    transition-duration: 1s, 1s;
    transition-property: height, opacity;
    transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
  }
}
```
<div class="cf"></div>
