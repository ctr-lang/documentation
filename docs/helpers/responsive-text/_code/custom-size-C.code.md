<div data-size="300" class="code-cont" data-example="custom-size-C">
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
  min-letter-spacing: 10px
  max-letter-spacing: 30px
  letter-spacing: 'responsive'
})
```

<div data-size="300" data-examples="yaml"></div>
```yaml
.test:
  min-letter-spacing: 10px
  max-letter-spacing: 30px
  letter-spacing: responsive
```

```css
.test {
  letter-spacing: calc(10px + 20 * ((100vw - 400px) / 1400));
}
@media only screen and (max-width: 400px) {
  .test {
    letter-spacing: 10px;
  }
}
@media only screen and (min-width: 1800px) {
  .test {
    letter-spacing: 30px;
  }
}
```
<div class="cf"></div>
