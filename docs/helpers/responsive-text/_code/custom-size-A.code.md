<div data-size="300" class="code-cont" data-example="custom-size-A">
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
  min-font-size: 10px
  max-font-size: 30px
  font-size: 'responsive'
})
```

<div data-size="300" data-examples="yaml"></div>
```yaml
.test:
  min-font-size: 10px
  max-font-size: 30px
  font-size: responsive
```

```css
.test {
  font-size: calc(10px + 20 * ((100vw - 400px) / 1400));
}
@media only screen and (max-width: 400px) {
  .test {
    font-size: 10px;
  }
}
@media only screen and (min-width: 1800px) {
  .test {
    font-size: 30px;
  }
}
```
<div class="cf"></div>
