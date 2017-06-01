<div data-size="475" class="code-cont" data-example="basic">
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

<div data-size="475" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  animations: {
    one: {
      name: meanMrMustard
      timeline: {
        '50%': {
          background: green
        }
      }
    }
    // key becomes timeline name
    two: {
      timeline: {
        '50%': {
          color: green
        }
      }
    }
  }
})
```

<div data-size="475" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  animations:
    one:
      name: meanMrMustard
      timeline:
        50%:
          background: green
    # key becomes timeline name
    two:
      timeline:
        50%:
          color: green
```

```css
.test {
  width: 200px;
  animation-delay: 0s, 0s;
  animation-duration: 0.5s, 0.5s;
  animation-fill-mode: none, none;
  animation-iteration-count: 1, 1;
  animation-name: meanMrMustard, two;
  animation-direction: normal, normal;
  animation-play-state: running, running;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
@keyframes meanMrMustard {
  50% {
    background: #008000;
  }
}
@keyframes two {
  50% {
    color: #008000;
  }
}
```
<div class="cf"></div>
