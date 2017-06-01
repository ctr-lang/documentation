<div data-size="270" data-examples="stylus" class="syntax"></div>
```styl
ctr('<#selector>', {
  // private variables
  $$: {
    one: <value:one>
    // eval plugin Object
    eval: {
      two: <value:two>
    }
  }
  <property:one>: '$one$'
  <property:two>: '$[eval.two]$'
})
```

<div data-size="270" data-examples="yaml" class="syntax"></div>
```yaml
<#selector>:
  # private variables
  $$:
    one: <value:one>
    # eval plugin Object
    eval:
      two: <value:eval>
  <property:one>: $one$
  <property:two>: $[eval.two]$
```


```css
<#selector> {
  <property:one>: <value:one>;
  <property:two>: <value:eval>;
}
```
<div class="cf"></div>




