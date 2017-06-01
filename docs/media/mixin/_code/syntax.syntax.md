<div data-size="175" data-examples="stylus" class="syntax"></div>
```styl
ctr('<#selector>', {
  media: {
    query: {
      <mixin:property>: <mixin:value>
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
      <mixin:property>: <mixin:value>
    <...>: <...>
```


```css
@media (<mixin-condition>) {
  <#selector> {
    <...>: <...>;
  }
}
```


