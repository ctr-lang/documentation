<div data-size="290" class="code-cont" data-example="calc">
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


<div data-size="290" data-examples="stylus"></div>
```styl
ctr('.test', {
  $$: {
    baseHeight: calc(100vh - 100px)
    eval: {
      halfHeight: 'calc($baseHeight$ / 2)'
    }
  }
  width: 200px
  height: '$baseHeight$'
  media-sm: {
    height: '$[eval.halfHeight]$'
  }
})
```

<div data-size="290" data-examples="yaml"></div>
```yaml
.test:
  $$:
    baseHeight: calc(100vh - 100px)
    eval:
      halfHeight: calc($baseHeight$ / 2)
  width: 200px
  height: $baseHeight$
  media-sm:
    height: $[eval.halfHeight]$
```

```css
.test {
  width: 200px;
  height: calc(100vh - 100px);
}
@media (min-width: 400px) and (max-width: 600px) {
  .test {
    height: calc((100vh - 100px) / 2);
  }
}
```

<div class="cf"></div>
