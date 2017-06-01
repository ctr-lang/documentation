<div data-size="150" class="code-cont" data-example="flex-container-B">
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
    container: 'column'
  }
})
```

<div data-size="150" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  grid:
    container: column
```

```css
.test {
  width: 200px;
  display: flex;
  flex-flow: column nowrap;
}
```
<div class="cf"></div>
