<div data-size="250" data-examples="stylus" class="syntax"></div>
```styl
ctrSetClass('<class>', {
  <...>: <...>
})

// longhand
ctr('<#selector>', {
  extend: {
    // String | List
    class: '<class>'
  }
})
```

<div data-size="250" data-examples="yaml" class="syntax"></div>
```yaml
ctr:::setClass:<class>:
  <...>: <...>

# longhand
<#selector>:
  extend:
    # String | List
    class: <class>
```



<div data-size="250" data-examples="stylus" class="syntax syntax-55"></div>
```styl
ctrSetClass('<class>', {
  <...>: <...>
})

// shorthand
ctr('<#selector>', {
  // String | List
  extend: '<class>'
})
```

<div data-size="250" data-examples="yaml" class="syntax syntax-55"></div>
```yaml
ctr:::setClass:<class>:
  <...>: <...>

# shorthand
<#selector>:
  # String | List
  extend: <class>
```



<div class="cf"></div>

