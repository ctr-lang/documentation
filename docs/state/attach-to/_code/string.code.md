<div data-size="450" class="code-cont" data-example="string">
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

<div data-size="450" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  'component-.myKoolClass': {
    width: 100px
    'component-span': {
      hover: {
        option: {
          attachTo: '.myKoolClass'
        }
        on: {
          opacity: 1
        }
        non: {
          opacity: 0.5
        }
      }
    }
  }
})
```

<div data-size="450" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  component-.myKoolClass:
    width: 100px
    component-span:
      hover:
        option:
          attachTo: .myKoolClass
        on:
          opacity: 1
        non:
          opacity: 0.5
```

```css
.test {
  width: 200px;
}
.test > .myKoolClass {
  width: 100px;
}
.test > .myKoolClass:hover > span {
  opacity: 1;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test > .myKoolClass:not(:hover) > span {
  opacity: 0.5;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
