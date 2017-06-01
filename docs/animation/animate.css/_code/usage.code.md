<div data-size="625" class="code-cont" data-example="usage">
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


<div data-size="625" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  animation: {
    // animate preset
    preset: 'bounce'
  }
})
```

<div data-size="625" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  animation:
    # animate preset
    preset: bounce
```

```css
.test {
  width: 200px;
  animation-delay: 0s;
  animation-duration: 1s;
  animation-name: bounce;
  animation-fill-mode: both;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-play-state: running;
  transform-origin: center bottom;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
@keyframes bounce {
  from, 20%, 53%, 80%, to {
    transform: translate3d(0, 0, 0);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  40%, 43% {
    transform: translate3d(0, -30px, 0);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  }
  70% {
    transform: translate3d(0, -15px, 0);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
}
```
<div class="cf"></div>
