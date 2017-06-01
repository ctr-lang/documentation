<div data-size="200" data-examples="stylus" class="syntax"></div>
```styl
// longhand
ctr('<#selector>', {
  grid: {
    masonry-wrap: {
      gutter: '<string>' | 30px
      flex: '<boolean>' | true
    }
  }
})
```

<div data-size="200" data-examples="yaml" class="syntax"></div>
```yaml
# longhand
<#selector>:
  grid:
    masonry-wrap:
      gutter: <string> | 30px
      flex: <boolean> | true
```


<div data-size="200" data-examples="stylus" class="syntax syntax-55"></div>
```styl
// shorthand
ctr('<#selector>', {
  grid: {
    masonry-wrap: '<gutter>' '<flex>'
  }
})
```

<div data-size="200" data-examples="yaml" class="syntax syntax-55"></div>
```yaml
# shorthand
<#selector>:
  grid:
    masonry-wrap: [<gutter>, <flex>]
```
<div class="cf"></div>

