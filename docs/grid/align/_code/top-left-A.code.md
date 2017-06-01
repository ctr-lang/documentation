<div data-size="150" class="code-cont" data-example="top-left-A">
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
// flex
ctr('.test', {
  grid: {
    align: 'top-left'
  }
})
```

<div data-size="150" data-examples="yaml"></div>
```yaml
# flex
.test:
  grid:
    align: top-left
```

```css
.test {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
```
<div class="cf"></div>
