<div data-size="575" data-examples="stylus" class="syntax"></div>
```styl
ctr('<#selector>', {
  animation: {
    option: {
      name: '<identifier>'
      //animation-delay
      delay: '<value>' | 0s
      //animation-duration
      duration: '<value>' | 0.5s
      //animation-fill-mode
      mode: '<value>' | none
      //animation-direction
      direction: '<value>' | normal
      //animation-iteration-count
      count: '<value>' | 1
      //animation-play-state
      state: '<value>' | running
      //animation-timing-function
      ease: '<value>' | cubic-bezier(0.42, 0, 0.58, 1)
    }
    timeline: {
      '<value>': {
        <...>: <...>
      }
    }
  }
})
```

<div data-size="575" data-examples="yaml" class="syntax"></div>
```yaml
<#selector>:
  animation:
    option:
      name: <identifier>
      # animation-delay
      delay: <value> | 0s
      # animation-duration
      duration: <value> | 0.5s
      # animation-fill-mode
      mode: <value> | none
      # animation-direction
      direction: <value> | normal
      # animation-iteration-count
      count: <value> | 1
      # animation-play-state
      state: <value> | running
      # animation-timing-function
      ease: <value> | cubic-bezier(0.42, 0, 0.58, 1)
    timeline:
      <value>:
        <...>: <...>
```

```css
<#selector> {
  animation-name: <identifier>;
  animation-delay: 0s;
  animation-duration: 0.5s;
  animation-fill-mode: none;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
@keyframes <identifier> {
  <value> {
    <...>: <...>;
  }
}
```
<div class="cf"></div>

