<div data-size="150" class="code-cont" data-example="flex-container-A">
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


<div data-size="150" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  grid: {
    container: 'row'
  }
})
```

<div data-size="150" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  grid:
    container: row
```

```css
.test {
  width: 200px;
  display: flex;
  flex-flow: row wrap;
}
```
<div class="cf"></div>
