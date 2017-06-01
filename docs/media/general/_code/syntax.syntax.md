<div data-size="175" data-examples="stylus" class="syntax"></div>
```styl
ctr('<#selector>', {
  media: {
    query: {
      <media:query>: <value>
    }
    <...>: <...>
  }
})
```

<div data-size="175" data-examples="yaml" class="syntax"></div>
```yaml
<#selector>:
  media:
    query:
      <media:query>: <value>
    <...>: <...>
```


```css
@media (<media:query>: <value>) {
  <#selector> {
    <...>: <...>;
  }
}
```
<div class="cf"></div>
