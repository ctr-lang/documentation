<div data-size="420" class="code-cont" data-example="animation">
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


<div data-size="420" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  component: {
    key: 'section'
    font-size: 1em
    // animation
    animation: {
      name: 'stellar-moves'
      timeline: {
        '50%': {
          color: red
        }
      }
    }
  }
})
```

<div data-size="420" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  component:
    key: section
    font-size: 1em
    # animation
    animation:
      name: stellar-moves
      timeline:
        50%:
          color: red
```

```css
.test {
  width: 200px;
}
.test > section {
  font-size: 1em;
  animation-delay: 0s;
  animation-duration: 0.5s;
  animation-fill-mode: none;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-name: stellar-moves;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
@keyframes stellar-moves {
  50% {
    color: #f00;
  }
}
```
<div class="cf"></div>
