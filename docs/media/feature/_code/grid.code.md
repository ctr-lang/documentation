<div data-size="550" class="code-cont" data-example="grid">
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


<div data-size="550" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  media-md: {
    width: 400px
    // grid
    grid: {
      column: '1/3'
    }
  }
})
```

<div data-size="550" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  media-md:
    width: 400px
    # grid
    grid:
      column: 1/3
```

```css
.test {
  width: 200px;
}
@media (min-width: 600px) and (max-width: 800px) {
  .test {
    width: 400px;
    flex: 0 0 auto;
  }
}
@media (min-width: 600px) and (max-width: 800px) {
  .test:nth-child(1n) {
    margin-right: 30px;
  }
}
@media (min-width: 600px) and (max-width: 800px) {
  .test:last-child {
    margin-right: 0;
  }
}
@media (min-width: 600px) and (max-width: 800px) {
  .test:nth-child(3n) {
    float: right;
    margin-right: 0;
  }
}
```
<div class="cf"></div>
