<div data-size="310" data-examples="stylus" class="syntax"></div>
```styl
// global variables
ctrSetVariable({
  one: <value:one>
  two: <value:two>
  obj: {
    three: <value:three>
  }
})

ctr('<#selector>', {
  <property:one>: '$one$'
  <property:two>: '$two$'
  <property:three>: '$[obj.three]$'
})
```

<div data-size="310" data-examples="yaml" class="syntax"></div>
```yaml
# global variables
ctr:::SetVariable:
  one: <value:one>
  two: <value:two>
  obj:
    three: <value:three>

<#selector>:
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




