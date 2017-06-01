<div data-size="300" class="code-cont" data-example="shorthand-A">
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
  font-size: 'responsive' 10px 30px
  font-size-range: 300px 900px
})
```

<div data-size="300" data-examples="yaml"></div>
```yaml
.test:
  font-size: [responsive, 10px, 30px]
  font-size-range: [300px, 900px]
```

```css
.test {
  font-size: calc(10px + 20 * ((100vw - 300px) / 600));
}
@media only screen and (max-width: 300px) {
  .test {
    font-size: 10px;
  }
}
@media only screen and (min-width: 900px) {
  .test {
    font-size: 30px;
  }
}
```
<div class="cf"></div>
