<div data-size="600" class="code-cont" data-example="inheritProperty-B">
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

<div data-size="600" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  transition: {
    opacity: 1
    media: {
      'md': {
        // Pulls in the parent properties to make a
        // new transition since color is not declared
        // in the parent
        color: red
      }
      'lg': {
        option: {
          // Overrides the default and the parent
          // properties are not pulled in to make
          // a new transition
          inheritProperty: false
        }
        color: blue
      }
    }
  }
})
```

<div data-size="600" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  transition:
    opacity: 1
    media:
      md:
        # Pulls in the parent properties to make a
        # new transition since color is not declared
        # in the parent
        color: red
      lg:
        option:
          # Overrides the default and the parent
          # properties are not pulled in to make
          # a new transition
          inheritProperty: false
        color: blue
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
    color: #f00;
    transition-delay: 0s, 0s;
    transition-duration: 0.5s, 0.5s;
    transition-property: color, opacity;
    transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
  }
}
@media (min-width: 800px) and (max-width: 1050px) {
  .test {
    color: #00f;
    transition-delay: 0s;
    transition-duration: 0.5s;
    transition-property: color;
    transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  }
}
```
<div class="cf"></div>
