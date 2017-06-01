<div data-size="220" data-examples="stylus" class="syntax"></div>
```styl
ctr('<#selector>', {
  transition: {
    <property:A>: <...>
    <property:B>: <...>
    shorthand: {
      <property:A>: '<duration:A>' '<delay:A>' '<ease:A>'
      <property:B>: '<duration:B>' '<delay:B>' '<ease:B>'
    }
  }
})
```

<div data-size="220" data-examples="yaml" class="syntax"></div>
```yaml
<#selector>:
  transition:
    <property:A>: <...>
    <property:B>: <...>
    shorthand:
      <property:A>: [<duration:A>, <delay:A>, <ease:A>]
      <property:B>: [<duration:B>, <delay:B>, <ease:B>]
```


```css
<#selector> {
  <property:A>: <...>;
  <property:B>: <...>;
  transition-duration: <duration:A>, <duration:B>;
  transition-delay: <delay:A>, <delay:B>;
  transition-timing-function: <ease:A>, <ease:A>; 
  transition-property: <property:A>, <property:B>;
}
```
<div class="cf"></div>




