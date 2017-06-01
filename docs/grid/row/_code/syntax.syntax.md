<div data-size="250" data-examples="stylus" class="syntax"></div>
```styl
// longhand
ctr('<#selector>', {
  grid: {
    row: {
      fraction: '<string>' | '<number>'
      gutter: '<string>' | 30px
      flex: '<boolean>' | true
    }
  }
})
```

<div data-size="250" data-examples="yaml" class="syntax"></div>
```yaml
# longhand
<#selector>:
  grid:
    row:
      fraction: <string> | <number>
      gutter: <string> | 30px
      flex: <boolean> | true
```

<div data-size="250" data-examples="stylus" class="syntax syntax-55"></div>
```styl
// shorthand
ctr('<#selector>', {
  grid: {
    row: '<fraction>' '<gutter>' '<flex>'
  }
})
```

<div data-size="250" data-examples="yaml" class="syntax syntax-55"></div>
```yaml
# shorthand
<#selector>:
  grid:
    row: [<fraction>, <gutter>, <flex>]
```

<div class="cf"></div>




