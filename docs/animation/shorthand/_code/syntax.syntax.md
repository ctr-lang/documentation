<div data-size="375" data-examples="stylus" class="syntax"></div>
```styl
ctr('<#selector>', {
  animation: {
    shorthand: {
      '<identifier>': '<duration>' '<delay>' '<ease>' '<count>' '<direction>' '<mode>' '<state>'
    }
    timeline: {
      '<value>': {
        <...>: <...>
      }
    }
  }
})
```

<div data-size="375" data-examples="yaml" class="syntax"></div>
```yaml
<#selector>:
  animation:
    shorthand:
      <identifier>: [<duration>, <delay>, <ease>, <count>, <direction>, <mode>, <state>]
    timeline:
      <value>:
        <...>: <...>
```


```css
<#selector> {
  animation-name: <identifier>;
  animation-delay: <delay>;
  animation-duration: <duration>;
  animation-fill-mode: <mode>;
  animation-direction: <direction>;
  animation-iteration-count: <count>;
  animation-play-state:<state>;
  animation-timing-function: <ease>;
}
@keyframes <identifier> {
  <value> {
    <...>: <...>;
  }
}
```
<div class="cf"></div>



