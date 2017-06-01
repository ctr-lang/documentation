<div data-size="420" data-examples="stylus" class="syntax"></div>
```styl
ctr('<#selector>', {
  state: {
    option: {
      key: '<identifier>'
      delay: '<value>' | 0s
      duration: '<value>' | 0.5s
      property: '<string>' | <list> | <scope:properties>
      ease: '<value>' | cubic-bezier(0.42, 0, 0.58, 1)
    }
    on: {
      <property:A>: <...>
      <property:B>: <...>
    }
    non: {
      <property:A>: <...>
      <property:B>: <...>
    }
  }
})
```

<div data-size="420" data-examples="yaml" class="syntax"></div>
```yaml
<#selector>:
  state:
    option:
      key: <identifier>
      delay: <value> | 0s
      duration: <value> | 0.5s
      property: <string> | <list> | <scope:properties>
      ease: <value> | cubic-bezier(0.42, 0, 0.58, 1)
    on:
      <property:A>: <...>
      <property:B>: <...>
    non:
      <property:A>: <...>
      <property:B>: <...>
```


```css
<#selector>:<identifier> {
  <property:A>: <...>;
  <property:B>: <...>;
  transition-delay: 0s, 0s;
  transition-duration: 0.5s, 0.5s;
  transition-property: <property:A>, <property:B>;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
<#selector>:not(<identifier>) {
  <property:A>: <...>;
  <property:B>: <...>;
  transition-delay: 0s, 0s;
  transition-duration: 0.5s, 0.5s;
  transition-property: <property:A>, <property:B>;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>




