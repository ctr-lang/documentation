<div data-size="800" data-examples="stylus" class="syntax"></div>
```styl
ctrSetClass('<class>', {
  $$: {
    <property>: <value:default>
    preset: {
      <preset:one>: {
        <property>: <value:preset:one>
      }
      <preset:two>: {
        <property>: <value:preset:two>
      }
    }
  }
  <...>: '$<property>$'
})

// default
ctr('<#selector>', {
  extend: <class>
})

// preset one
ctr('<#selector-one>', {
  extend: {
    <class>: {
      preset: <preset:one>
    }
  }
})

// preset two
ctr('<#selector-two>', {
  extend: {
    <class>: {
      preset: <preset:two>
    }
  }
})
```

<div data-size="800" data-examples="yaml" class="syntax"></div>
```yaml
ctr:::setClass:<class>:
  $$:
    <property>: <value:default>
    preset:
      <preset:one>:
        <property>: <value:preset:one>
      <preset:two>:
        <property>: <value:preset:two>
  <...>: $<property>$

# default
<#selector>:
  extend: <class>

# preset one
<#selector-one>:
  extend:
    <class>:
      preset: <preset:one>

# preset two
<#selector-two>:
  extend:
    <class>:
      preset: <preset:two>
```


```css
<#selector> {
  <...>: <value:default>;
}
<#selector-one> {
  <...>: <value:preset:one>;
}
<#selector-two> {
  <...>: <value:preset:two>;
}
```


<div class="cf"></div>

