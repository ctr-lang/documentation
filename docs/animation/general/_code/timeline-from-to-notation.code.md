<div data-size="425" class="code-cont" data-example="timeline-from-to-notation">
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

<div data-size="425" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  animation: {
    name: 'test'
    timeline: {
      'from': {
        font-size: 1rem
      }
      'to': {
        font-size: 1.2rem
      }
    }
  }
})
```

<div data-size="425" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  animation:
    name: test
    timeline:
      from:
        font-size: 1rem
      to:
        font-size: 1.2rem
```

```css
.test {
  width: 200px;
  animation-delay: 0s;
  animation-name: test;
  animation-duration: 0.5s;
  animation-fill-mode: none;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
@keyframes test {
  from {
    font-size: 1rem;
  }
  to {
    font-size: 1.2rem;
  }
}
```
<div class="cf"></div>
