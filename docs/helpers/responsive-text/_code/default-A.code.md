<div data-size="325" class="code-cont" data-example="default-A">
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


<div data-size="325" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  font-size: 'responsive'
})
```

<div data-size="325" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  font-size: responsive
```

```css
.test {
  width: 200px;
  font-size: calc(12px + 9 * ((100vw - 400px) / 1400));
}
@media only screen and (max-width: 400px) {
  .test {
    font-size: 12px;
  }
}
@media only screen and (min-width: 1800px) {
  .test {
    font-size: 21px;
  }
}
```
<div class="cf"></div>
