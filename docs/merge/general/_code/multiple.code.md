<div data-size="440" class="code-cont" data-example="multiple">
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

<div data-size="440" data-examples="stylus"></div>
```styl
ctr('.test', {
  $$: {
    objectA: {
      height: 400px
    }
    objectB: {
      hover: {
        on: {
          opacity: 1
        }
        non: {
          opacity: 0.5
        }
      }
    }
  }
  width: 200px
  merge: '$objectA$' '$objectB$'
})
```

<div data-size="440" data-examples="yaml"></div>
```yaml
.test:
  $$:
    objectA:
      height: 400px
    objectB:
      hover:
        on:
          opacity: 1
        non:
          opacity: 0.5
  width: 200px
  merge: [$objectA$, $objectB$]
```

```css
.test {
  width: 200px;
  height: 400px;
}
.test:hover {
  opacity: 1;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:hover) {
  opacity: 0.5;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
