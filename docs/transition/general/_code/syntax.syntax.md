<div data-size="270" data-examples="stylus" class="syntax"></div>
```styl
ctr('<#selector>', {
  transition: {
    option: {
      delay: '<string>' | 0s
      duration: '<string>' | 0.5s
      property: '<string>' | <list> | <scope:properties>
      ease: '<string>' | cubic-bezier(0.42, 0, 0.58, 1)
    }
    <property:A>: <...>
    <property:B>: <...>
  }
})
```

<div data-size="270" data-examples="yaml" class="syntax"></div>
```yaml
<#selector>:
  transition:
    option:
      delay: <string> | 0s
      duration: <string> | 0.5s
      property: <string> | <list> | <scope:properties>
      ease: <string> | cubic-bezier(0.42, 0, 0.58, 1)
    <property:A>: <...>
    <property:B>: <...>
```


```css
<#selector> {
  <property:A>: <...>;
  <property:B>: <...>;
  transition-delay: 0s, 0s;
  transition-duration: 0.5s, 0.5s;
  transition-property: <property:A>, <property:B>;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1); 
}
```
<div class="cf"></div>



