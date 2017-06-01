<div data-size="225" data-examples="stylus" class="syntax"></div>
```styl
// longhand syntax
ctr('<#selector>', {
  grid: {
    center: {
      max: '<string>' | '<lg-media-query>'
      pad: '<number>' | 0
      flex: '<boolean>' | true
    }
  }
})
```

<div data-size="225" data-examples="yaml" class="syntax"></div>
```yaml
# longhand syntax
<#selector>:
  grid:
    center:
      max: <string> | <lg-media-query>
      pad: <number> | 0
      flex: <boolean> | true
```

<div data-size="225" data-examples="stylus" class="syntax syntax-55"></div>
```styl
// shorthand
ctr('<#selector>', {
  grid: {
    center: '<max>' '<pad>' '<flex>'
  }
})
```

<div data-size="225" data-examples="yaml" class="syntax syntax-55"></div>
```yaml
# shorthand
<#selector>:
  grid:
    center: [<max>, <pad>, <flex>]
```

<div class="cf"></div>
