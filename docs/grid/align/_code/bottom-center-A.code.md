<div data-size="150" class="code-cont" data-example="bottom-center-A">
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
    align: 'bottom-center'
  }
})
```

<div data-size="150" data-examples="yaml"></div>
```yaml
# flex
.test:
  grid:
    align: bottom-center
```

```css
.test {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
```
<div class="cf"></div>
