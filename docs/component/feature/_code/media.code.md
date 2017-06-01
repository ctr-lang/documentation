<div data-size="250" class="code-cont" data-example="media">
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


<div data-size="250" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  component: {
    key: 'section'
    font-size: 1em
    // media
    media-lg: {
      font-size: 1.5em
    }
  }
})
```

<div data-size="250" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  component:
    key: section
    font-size: 1em
    # media
    media-lg:
      font-size: 1.5em
```

```css
.test {
  width: 200px;
}
.test > section {
  font-size: 1em;
}
@media (min-width: 800px) and (max-width: 1050px) {
  .test > section {
    font-size: 1.5em;
  }
}
```
<div class="cf"></div>
