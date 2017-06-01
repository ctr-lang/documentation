<div data-size="250" class="code-cont" data-example="timeline-reference">
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

<div data-size="250" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  animation: {
    name: 'my-kool-animation'
    duration: 3s
  }
})
```

<div data-size="250" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  animation:
    name: my-kool-animation
    duration: 3s
```

```css
.test {
  width: 200px;
  animation-delay: 0s;
  animation-duration: 3s;
  animation-fill-mode: none;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-name: my-kool-animation;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
