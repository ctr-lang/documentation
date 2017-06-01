<div data-size="400" class="code-cont" data-example="animation">
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


<div data-size="400" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  hover-on: {
    // animation
    animation: {
      name: 'beer'
      timeline: {
        '50%': {
          color: blue
        }
      }
    }
  }
})
```

<div data-size="400" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  hover-on:
    # animation
    animation:
      name: beer
      timeline:
        50%:
          color: blue
```

```css
.test {
  width: 200px;
}
.test:hover {
  animation-delay: 0s;
  animation-name: beer;
  animation-duration: 0.5s;
  animation-fill-mode: none;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
@keyframes beer {
  50% {
    color: #00f;
  }
}
```
<div class="cf"></div>
