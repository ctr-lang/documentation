<div data-size="225" data-examples="stylus" class="syntax"></div>
```styl
ctr('<#selector>', {
  media: {
    query: {
      <logical:operator>: {
        <...>: <...>
      }
    }
    <...>: <...>
  }
})
```

<div data-size="225" data-examples="yaml" class="syntax"></div>
```yaml
<#selector>:
  media:
    query:
      <logical:operator>:
        <...>: <...>
    <...>: <...>
```


```css
@media (<...>: <...>) <logical:operator> (<...>: <...>) {
  <#selector> {
    <...>: <...>;
  }
}
```
<div class="cf"></div>
