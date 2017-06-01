<div data-size="375" class="code-cont" data-example="em-and-rem-D">
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
// individualy set
ctr('.test', {
  width: 200px
  font-size: 'responsive' 1em 3em
  font-size-root: 10px
  line-height: 'responsive' 1.5rem 4rem
  line-height-root: 20px
})
```

<div data-size="375" data-examples="yaml"></div>
```yaml
# individualy set
.test:
  width: 200px
  font-size: [responsive, 1em, 3em]
  font-size-root: 10px
  line-height: [responsive, 1.5rem, 4rem]
  line-height-root: 20px
```

```css
.test {
  width: 200px;
  font-size: calc(1em + 2 * ((100vw - 40em) / 140));
  line-height: calc(1.5rem + 2.5 * ((100vw - 20rem) / 70));
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
