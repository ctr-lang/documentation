<div data-size="275" data-examples="stylus" class="syntax"></div>
```styl
// long hand
ctr('<#selector>', {
  grid: {
    waffle: {
      fraction: '<string>' | '<number>'
      gutter: '<string>' | 30px
      cycle: '<string>' | '<number>' | <fraction:denominator>
      flex: '<boolean>' | true
    }
  }
})
```

<div data-size="275" data-examples="yaml" class="syntax"></div>
```yaml
# long hand
<#selector>:
  grid:
    waffle:
      fraction: <string> | <number>
      gutter: <string> | 30px
      cycle: <string> | <number> | <fraction:denominator>
      flex: <boolean> | true
```

<div data-size="275" data-examples="stylus" class="syntax syntax-55"></div>
```styl
// shorthand
ctr('<#selector>', {
  grid: {
    waffle: '<fraction>' '<cycle>' '<gutter>' '<flex>'
  }
})
```

<div data-size="275" data-examples="yaml" class="syntax syntax-55"></div>
```yaml
# shorthand
'<#selector>':
  grid:
    waffle: [<fraction>, <cycle>, <gutter>, <flex>]
```

<div class="cf"></div>



