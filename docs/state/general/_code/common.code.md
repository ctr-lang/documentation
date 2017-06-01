<div data-size="520" class="code-cont" data-example="common">
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

<div data-size="520" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  hover: {
    // merged into both on and non
    common: {
      option: {
        duration: 1s
      }
      transform: {
        translateZ: 0
      }
    }
    on: {
      transform: {
        translateY: 20
      }
    }
    non: {
      transform: {
        translateY: 0
      }
    }
  }
})
```

<div data-size="520" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  hover:
    # merged into both on and non
    common:
      option:
        duration: 1s
      transform:
        translateZ: 0
    on:
      transform:
        translateY: 20
    non:
      transform:
        translateY: 0
```

```css
.test {
  width: 200px;
}
.test:hover {
  transition-delay: 0s;
  transition-duration: 1s;
  transition-property: transform;
  transform: translateZ(0) translateY(20);
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:hover) {
  transition-delay: 0s;
  transition-duration: 1s;
  transition-property: transform;
  transform: translateZ(0) translateY(0);
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
