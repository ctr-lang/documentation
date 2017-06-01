<div data-size="375" class="syntax"></div>
```styl
ctr('<#selector>', {
  width: 200px
  hover: {
    option: {
      shorthand: {
        //stylus automatically does this for you
        height: 10s ease-in 4s
      }
    }
    on: {
      height: 400px
    }
    non: {
      height: 200px
    }
  }
})
```

```yaml
<#selector>:
  width: 200px
  hover:
    on:
      height: 400px
    non:
      height: 200px
    option:
      shorthand:
        # Needs to use [ & ] to signify its an array
        height: [10s, ease-in, 4s]
```
<div class="cf"></div>

