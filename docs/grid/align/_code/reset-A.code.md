<div data-size="150" class="code-cont" data-example="reset-A">
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
    align: 'reset'
  }
})
```

<div data-size="150" data-examples="yaml"></div>
```yaml
# flex
.test:
  grid:
    align: reset
```

```css
.test {
  display: initial;
  align-items: inherit;
  justify-content: inherit;
}
```
<div class="cf"></div>
