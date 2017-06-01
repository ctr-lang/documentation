<div data-size="490" class="code-cont" data-example="inheritProperty-A">
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

<div data-size="490" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  transition: {
    opacity: 1
    media: {
      'md': {
        // No need to regenerate of transition properties
        // for media since it can inherit the parents
        opacity: 0.85
      }
      'lg': {
        // Due to a different option the transition
        // properties will need to be regenerate
        option: {
          duration: 2s
        }
        opacity: 0.65
      }
    }
  }
})
```

<div data-size="490" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  transition:
    opacity: 1
    media:
      md:
        # No need to regenerate of transition properties
        # for media since it can inherit the parents
        opacity: 0.85
      lg:
        # Due to a different option the transition
        # properties will need to be regenerate
        option:
          duration: 2s
        opacity: 0.65
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
    opacity: 0.85;
  }
}
@media (min-width: 800px) and (max-width: 1050px) {
  .test {
    opacity: 0.65;
    transition-delay: 0s;
    transition-duration: 2s;
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  }
}
```
<div class="cf"></div>
