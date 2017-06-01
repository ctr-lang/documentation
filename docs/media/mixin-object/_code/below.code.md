<div data-size="300" class="code-cont" data-example="below">
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
  height: 200px
  medias: {
    '-sm': {
      width: 100px
    }
    '-1050px': {
      width: 300px
    }
  }
})
```

<div data-size="300" data-examples="yaml"></div>
```yaml
.test:
  height: 200px
  medias:
    -sm:
      width: 100px
    -1050px:
      width: 300px
```

```css
.test {
  height: 200px;
}
@media (max-width: 600px) {
  .test {
    width: 100px;
  }
}
@media (max-width: 1050px) {
  .test {
    width: 300px;
  }
}
```
<div class="cf"></div>
