<div data-size="375" class="code-cont" data-example="em-and-rem-A">
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


<div data-size="375" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  font-size: 'responsive' 1em 3em
  line-height: 'responsive' 1.5rem 4rem
})
```

<div data-size="375" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  font-size: [responsive, 1em, 3em]
  line-height: [responsive, 1.5rem, 4rem]
```

```css
.test {
  width: 200px;
  font-size: calc(1em + 2 * ((100vw - 25em) / 87.5));
  line-height: calc(1.5rem + 2.5 * ((100vw - 25rem) / 87.5));
}
@media only screen and (max-width: 400px) {
  .test {
    font-size: 1em;
    line-height: 1.5rem;
  }
}
@media only screen and (min-width: 1800px) {
  .test {
    font-size: 3em;
    line-height: 4rem;
  }
}
```
<div class="cf"></div>
