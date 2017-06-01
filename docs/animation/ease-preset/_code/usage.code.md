<div data-size="375" class="code-cont" data-example="usage">
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


<div data-size="375" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  animation: {
    name: 'easey-living'
    // ease preset
    ease: 'easeInOutQuart'
    timeline: {
      '50%': {
        color: red
      }
    }
  }
})
```

<div data-size="375" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  animation:
    name: easey-living
    # ease preset
    ease: easeInOutQuart
    timeline:
      50%:
        color: red
```

```css
.test {
  width: 200px;
  animation-delay: 0s;
  animation-duration: 0.5s;
  animation-fill-mode: none;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-name: easey-living;
  animation-play-state: running;
  animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
}
@keyframes easey-living {
  50% {
    color: #f00;
  }
}
```
<div class="cf"></div>
