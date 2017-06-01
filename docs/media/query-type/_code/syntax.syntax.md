<div data-size="250" data-examples="stylus" class="syntax"></div>
```styl
ctr('<#selector>', {
  media: {
    query: {
      type: {
        media: '<media>'
        condition: '<only>' | '<not>'
      }
    }
    <...>: <...>
  }
})
```

<div data-size="250" data-examples="yaml" class="syntax"></div>
```yaml
<#selector>:
  media:
    query:
      type:
        media: <media>
        condition: <only> | <not>
    <...>: <...>
```


```css
@media <type:condition> <type:media> {
  <#selector> {
    <...>: <...>;
  }
}
```
<div class="cf"></div>
