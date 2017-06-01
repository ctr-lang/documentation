<div data-size="200" class="code-cont" data-example="center-A">
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
// flexbox
ctr('.test', {
  grid: {
    center: 1140px 30px
  }
})
```

<div data-size="200" data-examples="yaml"></div>
```yaml
# flexbox
.test:
  grid:
    center: [1140px, 30px]
```

```css
.test {
  display: flex;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  flex-flow: row wrap;
  padding-right: 30px;
}
```
<div class="cf"></div>
