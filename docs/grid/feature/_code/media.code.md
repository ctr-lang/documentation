<div data-size="790" class="code-cont" data-example="media">
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


<div data-size="790" data-examples="stylus"></div>
```styl
ctr('.test', {
  grid: {
    option: {
      gutter: 60px
    }
    column: '1/2'
    media: {
      'sm': {
        column: '1/3'
      }
    }
  }
})
```

<div data-size="790" data-examples="yaml"></div>
```yaml
.test:
  grid:
    option:
      gutter: 60px
    column: 1/2
    media:
      sm:
        column: 1/3
```

```css
.test {
  flex: 0 0 auto;
  width: calc(99.9% * 1 / 2 - (60px - 60px * 1 / 2));
}
.test:nth-child(1n) {
  margin-right: 60px;
}
.test:last-child {
  margin-right: 0;
}
.test:nth-child(2n) {
  float: right;
  margin-right: 0;
}
@media (min-width: 400px) and (max-width: 600px) {
  .test {
    flex: 0 0 auto;
    width: calc(99.9% * 1 / 3 - (60px - 60px * 1 / 3));
  }
}
@media (min-width: 400px) and (max-width: 600px) {
  .test:nth-child(1n) {
    margin-right: 60px;
  }
}
@media (min-width: 400px) and (max-width: 600px) {
  .test:last-child {
    margin-right: 0;
  }
}
@media (min-width: 400px) and (max-width: 600px) {
  .test:nth-child(3n) {
    float: right;
    margin-right: 0;
  }
}
```
<div class="cf"></div>
