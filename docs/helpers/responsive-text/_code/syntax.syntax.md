<div data-size="300" data-examples="stylus" class="syntax"></div>
```styl
ctr('<#selector>', {
  <responsive:property>: responsive
})
```

<div data-size="300" data-examples="yaml" class="syntax"></div>
```yaml
<#selector>:
  <responsive:property>: responsive
```


```css
<#selector> {
  <responsive:property>: <responsive:value>;
}
@media only screen and (max-width: <default min-width>) {
  <#selector> {
    <responsive:property>: <responsive:value>;
  }
}
@media only screen and (min-width: <default max-width>) {
  <#selector> {
    <responsive:property>: <responsive:value>;
  }
}
```
<div class="cf"></div>



