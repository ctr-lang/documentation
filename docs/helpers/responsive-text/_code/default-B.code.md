<div data-size="325" class="code-cont" data-example="default-B">
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
  line-height: 'responsive'
})
```

<div data-size="325" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  line-height: responsive
```

```css
.test {
  width: 200px;
  line-height: calc(1rem + 1 * ((100vw - 25rem) / 87.5));
}
@media only screen and (max-width: 400px) {
  .test {
    line-height: 1rem;
  }
}
@media only screen and (min-width: 1800px) {
  .test {
    line-height: 2rem;
  }
}
```
<div class="cf"></div>
