<div data-size="600" class="code-cont" data-example="target">
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

<div data-size="600" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  animations: {
    common: {
      option: {
        duration: 1s
        direction: 'foward'
        // only merges with "two"
        target: 'two'
      }
    }
    one: {
      timeline: {
        '50%': {
          background: green
        }
      }
    }
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

<div data-size="600" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  animations:
    common:
      option:
        duration: 1s
        direction: foward
        # only merges with "two"
        target: two
    one:
      timeline:
        50%:
          background: green
    two:
      timeline:
        50%:
          color: green
```

```css
.test {
  width: 200px;
  animation-delay: 0s, 0s;
  animation-name: one, two;
  animation-duration: 0.5s, 1s;
  animation-fill-mode: none, none;
  animation-iteration-count: 1, 1;
  animation-direction: normal, foward;
  animation-play-state: running, running;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
@keyframes one {
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
