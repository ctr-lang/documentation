<div data-size="275" class="code-cont" data-example="example">
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


<div data-size="275" data-examples="stylus"></div>
```styl
ctr('section', {
  grid: {
    masonry-wrap: 60px
  }
  component-div: {
    grid: {
      masonry-column: '1/3' 60px
    }
  }
})
```

<div data-size="275" data-examples="yaml"></div>
```yaml
section:
  grid:
    masonry-wrap: 60px
  component-div:
    grid:
      masonry-column: [1/3, 60px]
```

```css
section {
  display: flex;
  margin-left: -30px;
  flex-flow: row wrap;
  margin-right: -30px;
}
section > div {
  flex: 0 0 auto;
  margin-left: 30px;
  margin-right: 30px;
  width: calc(99.9% * 1 / 3 - 60px);
}
```
<div class="cf"></div>
