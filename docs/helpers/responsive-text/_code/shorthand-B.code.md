<div data-size="300" class="code-cont" data-example="shorthand-B">
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
  line-height: 'responsive' 10px 30px
  line-height-range: 300px 900px
})
```

<div data-size="300" data-examples="yaml"></div>
```yaml
.test:
  line-height: [responsive, 10px, 30px]
  line-height-range: [300px, 900px]
```

```css
.test {
  line-height: calc(10px + 20 * ((100vw - 300px) / 600));
}
@media only screen and (max-width: 300px) {
  .test {
    line-height: 10px;
  }
}
@media only screen and (min-width: 900px) {
  .test {
    line-height: 30px;
  }
}
```
<div class="cf"></div>
