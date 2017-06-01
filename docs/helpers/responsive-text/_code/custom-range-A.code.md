<div data-size="300" class="code-cont" data-example="custom-range-A">
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


<div data-size="300" data-examples="stylus"></div>
```styl
ctr('.test', {
  min-font-size-range: 300px
  max-font-size-range: 900px
  font-size: 'responsive'
})
```

<div data-size="300" data-examples="yaml"></div>
```yaml
.test:
  min-font-size-range: 300px
  max-font-size-range: 900px
  font-size: responsive
```

```css
.test {
  font-size: calc(12px + 9 * ((100vw - 300px) / 600));
}
@media only screen and (max-width: 300px) {
  .test {
    font-size: 12px;
  }
}
@media only screen and (min-width: 900px) {
  .test {
    font-size: 21px;
  }
}
```
<div class="cf"></div>
