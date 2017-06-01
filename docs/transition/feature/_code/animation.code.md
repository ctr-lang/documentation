<div data-size="470" class="code-cont" data-example="animation">
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


<div data-size="470" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  transition: {
    opacity: 1
    // animation
    animation: {
      name: 'test'
      timeline: {
        '50%': {
          background: black
        }
      }
    }
  }
})
```

<div data-size="470" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  transition:
    opacity: 1
    # animation
    animation:
      name: test
      timeline:
        50%:
          background: black
```

```css
.test {
  opacity: 1;
  width: 200px;
  animation-delay: 0s;
  animation-name: test;
  transition-delay: 0s;
  animation-duration: 0.5s;
  animation-fill-mode: none;
  transition-duration: 0.5s;
  animation-direction: normal;
  animation-iteration-count: 1;
  transition-property: opacity;
  animation-play-state: running;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
@keyframes test {
  50% {
    background: #000;
  }
}
```
<div class="cf"></div>
