<div data-size="340" class="code-cont" data-example="private">
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


<div data-size="340" data-examples="stylus"></div>
```styl
ctr('.test', {
  $$: {
    width: 200px
    color: red
    fontSize: 1em
    pretty-cool: 300px
  }
  width: '$width$'
  font-size: '$fontSize$'
  component-span: {
    color: '$color$'
    // alternative syntax
    height: '$[pretty-cool]$'
  }
})
```

<div data-size="340" data-examples="yaml"></div>
```yaml
.test:
  $$:
    width: 200px
    color: red
    fontSize: 1em
    pretty-cool: 300px
  width: $width$
  font-size: $fontSize$
  component-span:
    color: $color$
    # alternative syntax
    height: $[pretty-cool]$
```

```css
.test {
  width: 200px;
  font-size: 1em;
}
.test > span {
  color: #f00;
  height: 300px;
}
```

<div class="cf"></div>
