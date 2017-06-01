<div data-size="390" class="code-cont" data-example="usage">
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


<div data-size="390" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  hover: {
    on: {
      option: {
        ease: 'easeInBack'
      }
      left: 0%
    }
    non: {
      option: {
        ease: 'easeInOutQuart'
      }
      left: 100%
    }
  }
})
```

<div data-size="390" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  hover:
    on:
      option:
        ease: easeInBack
      left: 0%
    non:
      option:
        ease: easeInOutQuart
      left: 100%
```

```css
.test {
  width: 200px;
}
.test:hover {
  left: 0%;
  transition-delay: 0s;
  transition-property: left;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);
}
.test:not(:hover) {
  left: 100%;
  transition-delay: 0s;
  transition-property: left;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
}
```
<div class="cf"></div>
