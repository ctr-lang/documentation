<div data-size="600" data-examples="stylus" class="syntax"></div>
```styl
ctrSetClass('<class-one>', {
  $$: {
    <variable:one-1>: <value:one-default>
    <variable:common>: <value:one-default>
  }
  <property:one-1>: '$<variable:one-1>$'
  <property:one-2>: '$<variable:common>$'
})

ctrSetClass('<class-two>', {
  $$: {
    <variable:two-1>: <value:two-default>
    <variable:common>: <value:two-default>
  }
  <property:two-1>: '$<variable:two-1>$'
  <property:two-2>: '$<variable:common>$'
})


ctr('<#selector>', {
  extend: {
    // common variable Object
    $$: {
      <variable:common>: <value:extend-common>
    }
    class: '<class-one>' '<class-two>'
  }
})
```

<div data-size="600" data-examples="yaml" class="syntax"></div>
```yaml
ctr:::setClass:<class-one>:
  $$:
    <variable:one-1>: <value:one-default>
    <variable:common>: <value:one-default>
  <property:one-1>: $<variable:one-1>$
  <property:one-2>: $<variable:common>$

ctr:::setClass:<class-two>:
  $$:
    <variable:two-1>: <value:two-default>
    <variable:common>: <value:two-default>
  <property:two-1>: $<variable:two-1>$
  <property:two-2>: $<variable:common>$


<#selector>:
  extend:
    # common variable Object
    $$:
      <variable:common>: <value:extend-common>
    class: [<class-one>, <class-two>]
```


```css
<#selector> {
  <property:one-1>: <value:one-default>
  <property:one-2>: <value:extend-common>
  <property:two-1>: <value:two-default>
  <property:two-2>: <value:extend-common>
}
```


<div class="cf"></div>

