<div data-size="300" class="code-cont" data-example="shorthand-C">
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
  letter-spacing: 'responsive' 10px 30px
  letter-spacing-range: 300px 900px
})
```

<div data-size="300" data-examples="yaml"></div>
```yaml
.test:
  letter-spacing: [responsive, 10px, 30px]
  letter-spacing-range: [300px, 900px]
```

```css
.test {
  letter-spacing: calc(10px + 20 * ((100vw - 300px) / 600));
}
@media only screen and (max-width: 300px) {
  .test {
    letter-spacing: 10px;
  }
}
@media only screen and (min-width: 900px) {
  .test {
    letter-spacing: 30px;
  }
}
```
<div class="cf"></div>
