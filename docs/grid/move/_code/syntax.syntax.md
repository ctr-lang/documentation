<div data-size="250" data-examples="stylus" class="syntax"></div>
```styl
// longhand
ctr('<#selector>', {
  grid: {
    move: {
      fraction: '<string>'
      direction: '<string>' | 'row'
      gutter: '<string>' | 30px
    }
  }
})
```

<div data-size="250" data-examples="yaml" class="syntax"></div>
```yaml
# longhand
<#selector>:
  grid:
    move:
      fraction: <string>
      direction: <string> | row
      gutter: <string> | 30px
```

<div data-size="250" data-examples="stylus" class="syntax syntax-55"></div>
```styl
// shorthand
ctr('<#selector>', {
  grid: {
    move: '<fraction>' '<direction>' '<gutter>'
  }
})
```

<div data-size="250" data-examples="yaml" class="syntax syntax-55"></div>
```yaml
# shorthand
<#selector>:
  grid:
    move: [<fraction>, <direction>, <gutter>]
```

<div class="cf"></div>




