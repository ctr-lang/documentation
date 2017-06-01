<div data-size="260" class="code-cont" data-example="multiple-string">
    <div class="code">
        <div class="code-wrap">
            <textarea id="stylus"></textarea>
            <textarea id="css"></textarea>
            <div class="edit-code">
                <span>Edit</span>
            </div>
        </div>
    </div>
</div>


<div data-size="260" data-examples="stylus"></div>
```styl
ctr('.test', {
  $$: {
    hLength: 1px
    vLength: 2px
    blur: 3px
    spread: 4px
    background: red
  }
  width: 200px
  box-shadow: '$hLength$ $vLength$ $blur$ $spread$ $background$'
})
```

<div data-size="260" data-examples="yaml"></div>
```yaml
.test:
  $$:
    hLength: 1px
    vLength: 2px
    blur: 3px
    spread: 4px
    background: red
  width: 200px
  box-shadow: [$hLength$, $vLength$, $blur$, $spread$, $background$]
```

```css
.test {
  width: 200px;
  box-shadow: 1px 2px 3px 4px #f00;
}
```
<div class="cf"></div>
