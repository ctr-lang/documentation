<div data-size="490" class="code-cont" data-example="pick">
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
  transitions: {
    common: {
      option: {
        duration: 2s
        ease: 'ease-in'
      }
    }
    one: {
      opacity: 1
    }
    two: {
      option: {
        // only picks duration
        pick: 'option.duration'
      }
      color: blue
      background: red
    }
  }
})
```

<div data-size="490" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  transitions:
    common:
      option:
        duration: 2s
        ease: ease-in
    one:
      opacity: 1
    two:
      option:
        # only picks duration
        pick: option.duration
      color: blue
      background: red
```

```css
.test {
  opacity: 1;
  color: #00f;
  width: 200px;
  background: #f00;
  transition-delay: 0s, 0s, 0s;
  transition-duration: 2s, 2s, 2s;
  transition-property: opacity, color, background;
  transition-timing-function: ease-in, cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
