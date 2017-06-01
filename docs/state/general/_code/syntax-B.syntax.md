<div data-size="290" data-examples="stylus" class="syntax"></div>
```styl
ctr('<#selector>', {
  // State Identifier
  <identifier>: {
    on: {
      <property:A>: <...>
      <property:B>: <...>
    }
    non: {
      <property:A>: <...>
      <property:B>: <...>
    }
  }
})
```

<div data-size="290" data-examples="yaml" class="syntax"></div>
```yaml
<#selector>:
  # State Identifier
  <identifier>:
    on:
      <property:A>: <...>
      <property:B>: <...>
    non:
      <property:A>: <...>
      <property:B>: <...>
```


```css
<#selector>:<identifier> {
  <property:A>: <...>;
  <property:B>: <...>;
}
<#selector>:not(<identifier>) {
  <property:A>: <...>;
  <property:B>: <...>;
}
```
<div class="cf"></div>




