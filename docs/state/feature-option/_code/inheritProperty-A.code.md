<div data-size="540" class="code-cont" data-example="inheritProperty-A">
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

<div data-size="540" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  hover: {
    on: {
      height: 400px

      media: {
        'md': {
          // No need to regenerate of transition properties
          // for media since it can inherit the parents
          height: 300px
        }
        'sm': {
          height: 200px
          // Due to a different option the transition
          // properties will need to be regenerate
          option: {
            duration: 2s
          }
        }
      }
    }
  }
})
```

<div data-size="540" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  hover:
    on:
      height: 400px
      media:
        md:
          # No need to regenerate of transition properties
          # for media since it can inherit the parents
          height: 300px
        sm:
          height: 200px
          # Due to a different option the transition
          # properties will need to be regenerate
          option:
            duration: 2s
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
@media (min-width: 400px) and (max-width: 600px) {
  .test:hover {
    height: 200px;
    transition-delay: 0s;
    transition-duration: 2s;
    transition-property: height;
    transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  }
}
```
<div class="cf"></div>
