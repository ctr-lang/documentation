<div data-size="300" class="code-cont" data-example="custom-range-B">
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
  min-line-height-range: 300px
  max-line-height-range: 900px
  line-height: 'responsive'
})
```

<div data-size="300" data-examples="yaml"></div>
```yaml
.test:
  min-line-height-range: 300px
  max-line-height-range: 900px
  line-height: responsive
```

```css
.test {
  line-height: calc(1rem + 1 * ((100vw - 18.75rem) / 37.5));
}
@media only screen and (max-width: 300px) {
  .test {
    line-height: 1rem;
  }
}
@media only screen and (min-width: 900px) {
  .test {
    line-height: 2rem;
  }
}
```
<div class="cf"></div>
