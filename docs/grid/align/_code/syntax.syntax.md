<div data-size="210" data-examples="stylus" class="syntax"></div>
```styl
// longhand
ctr('<#selector>', {
  grid: {
    align: {
      location: '<string>'
      flex: <boolean> | true
    }
  }
})
```

<div data-size="210" data-examples="yaml" class="syntax"></div>
```yaml
# longhand
<#selector>:
  grid:
    align:
      location: <string>
      flex: <boolean> | true
```


<div data-size="210" data-examples="stylus" class="syntax syntax-55"></div>
```styl
// shorthand
ctr('<#selector>', {
  grid: {
    align: '<location>' '<flex>'
  }
})
```

<div data-size="210" data-examples="yaml" class="syntax syntax-55"></div>
```yaml
# shorthand
<#selector>:
  grid:
    align: [<location>, <flex>]
```

<div class="cf"></div>

