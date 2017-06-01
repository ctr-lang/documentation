<div data-size="260" class="code-cont" data-example="media">
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


<div data-size="260" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  first-child: {
    height: 400px
    // media
    media-lg: {
      font-size: 1.5em
    }
  }
})
```

<div data-size="260" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  first-child:
    height: 400px
    # media
    media-lg:
      font-size: 1.5em
```

```css
.test {
  width: 200px;
}
.test:first-child {
  height: 400px;
}
@media (min-width: 800px) and (max-width: 1050px) {
  .test:first-child {
    font-size: 1.5em;
  }
}
```
<div class="cf"></div>
