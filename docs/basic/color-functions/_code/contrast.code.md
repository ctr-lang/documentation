<div data-size="100" class="code-cont" data-example="contrast">
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


<div data-size="100" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  z-index: contrast(black, red).ratio
})
```

<div data-size="100" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  z-index: contrast(black, red).ratio
```

```css
.test {
  width: 200px;
  z-index: 5.3;
}
```
<div class="cf"></div>
