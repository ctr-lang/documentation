<!-- gen:false -->

<div data-size="200" data-example="stylus-variables" class="code-cont">
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


<div data-size="200" data-examples="stylus"></div>
```styl
$font-size = 14px

ctr('.test', {
  width: 200px
  font-size: $font-size
})
```

<div data-size="200" data-examples="yaml"></div>
```yaml
# Technically, not a "Stylus" variable,
# but YAML also has a pseudo global variable scope
$$:
  font-size: 14px

.test:
  width: 200px
  font-size: $font-size$
```

```css
.test {
  width: 200px;
  font-size: 14px;
}
```
<div class="cf"></div>
