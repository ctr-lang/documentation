<div data-size="290" data-examples="stylus" class="syntax"></div>
```styl
ctr('<#selector>', {
  // local variables
  $$: {
    one: <value:one>
    two: <value:two>
    obj: {
      three: <value:three>
    }
  }
  <property:one>: '$one$'
  <property:two>: '$two$'
  <property:three>: '$[obj.three]$'
})
```

<div data-size="290" data-examples="yaml" class="syntax"></div>
```yaml
<#selector>:
  # local variables
  $$:
    one: <value:one>
    two: <value:two>
    obj:
      three: <value:three>
  <property:one>: $one$
  <property:two>: $two$
  <property:three>: $[obj.three]$
```


```css
<#selector> {
  <property:one>: <value:one>;
  <property:two>: <value:two>;
  <property:three>: <value:three>;
}
```
<div class="cf"></div>




