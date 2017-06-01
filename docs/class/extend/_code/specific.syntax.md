<div data-size="700" data-examples="stylus" class="syntax"></div>
```styl
ctrSetClass('<class>', {
  $$: {
    <variable:one>: <value:default-one>
    <variable:two>: <value:default-two>
  }
  <property:one>: '$<variable:one>$'
  <property:two>: '$<variable:two>$'
})


// <class> property key
ctr('<#selector-one>', {
  extend: {
    // Object key <class> identifier
    myKoolClass: {
      class: <class>
      // variable one altered
      <variable:one>: <value:extend-one>
    }
  }
})

// Object <class> key
ctr('<#selector-two>', {
  extend: {
    // Object key <class> identifier
    <class>: {
      // variable two altered
      <variable:two>: <value:extend-two>
    }
  }
})
```

<div data-size="700" data-examples="yaml" class="syntax"></div>
```yaml
ctr:::setClass:<class>:
  $$:
    <variable:one>: <value:default-one>
    <variable:two>: <value:default-two>
  <property:one>: $<variable:one>$
  <property:two>: $<variable:two>$


# <class> property key
<#selector-one>:
  extend:
    # Object key <class> identifier
    myKoolClass:
      class: <class>
      # variable one altered
      <variable:one>: <value:extend-one>

# Object <class> key
<#selector-two>:
  extend:
    # Object key <class> identifier
    <class>:
      # variable two altered
      <variable:two>: <value:extend-two>
```


```css
<#selector-one> {
  <property:one>: <value:extend-one>;
  <property:two>: <value:default-two>;
}
<#selector-two> {
  <property:one>: <value:default-one>;
  <property:two>: <value:extend-two>;
}
```


<div class="cf"></div>

