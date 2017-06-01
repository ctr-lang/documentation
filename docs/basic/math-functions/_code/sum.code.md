<div data-size="100" class="code-cont" data-example="sum">
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
  font-size: unit(sum(1 2 3), 'px')
})
```

<div data-size="100" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  font-size: unit(sum(1 2 3), px)
```

```css
.test {
  width: 200px;
  font-size: 6px;
}
```
<div class="cf"></div>
