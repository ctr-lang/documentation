<div data-size="300" class="code-cont" data-example="custom-size-B">
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
  min-line-height: 10px
  max-line-height: 30px
  line-height: 'responsive'
})
```

<div data-size="300" data-examples="yaml"></div>
```yaml
.test:
  min-line-height: 10px
  max-line-height: 30px
  line-height: responsive
```

```css
.test {
  line-height: calc(10px + 20 * ((100vw - 400px) / 1400));
}
@media only screen and (max-width: 400px) {
  .test {
    line-height: 10px;
  }
}
@media only screen and (min-width: 1800px) {
  .test {
    line-height: 30px;
  }
}
```
<div class="cf"></div>
