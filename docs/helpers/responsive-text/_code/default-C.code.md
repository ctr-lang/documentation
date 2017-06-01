<div data-size="325" class="code-cont" data-example="default-C">
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
  letter-spacing: 'responsive'
})
```

<div data-size="325" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  letter-spacing: responsive
```

```css
.test {
  width: 200px;
  letter-spacing: calc(3px + 7 * ((100vw - 400px) / 1400));
}
@media only screen and (max-width: 400px) {
  .test {
    letter-spacing: 3px;
  }
}
@media only screen and (min-width: 1800px) {
  .test {
    letter-spacing: 10px;
  }
}
```
<div class="cf"></div>
