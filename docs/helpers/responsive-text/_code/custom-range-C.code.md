<div data-size="300" class="code-cont" data-example="custom-range-C">
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
  min-letter-spacing-range: 300px
  max-letter-spacing-range: 900px
  letter-spacing: 'responsive'
})
```

<div data-size="300" data-examples="yaml"></div>
```yaml
.test:
  min-letter-spacing-range: 300px
  max-letter-spacing-range: 900px
  letter-spacing: responsive
```

```css
.test {
  letter-spacing: calc(3px + 7 * ((100vw - 300px) / 600));
}
@media only screen and (max-width: 300px) {
  .test {
    letter-spacing: 3px;
  }
}
@media only screen and (min-width: 900px) {
  .test {
    letter-spacing: 10px;
  }
}
```
<div class="cf"></div>
