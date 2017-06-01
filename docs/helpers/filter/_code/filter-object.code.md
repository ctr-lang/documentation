<div data-size="180" class="code-cont" data-example="filter-object">
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


<div data-size="180" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  filter: {
    brightness: 0.4
    contrast: 0.85
    saturate: 0.75
  }
})
```

<div data-size="180" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  filter:
    brightness: 0.4
    contrast: 0.85
    saturate: 0.75
```

```css
.test {
  width: 200px;
  filter: brightness(0.4) contrast(0.85) saturate(0.75);
}
```
<div class="cf"></div>
