<!-- gen:false -->

<div data-size="360" class="code-cont" data-example="global">
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


<div data-size="360" data-examples="stylus"></div>
```styl
ctrSetVariable({
  width: 200px
  color: red
  fontSize: 1em
  pretty-cool: 300px
})

ctr('.test', {
  width: '$width$'
  font-size: '$fontSize$'
  component-span: {
    color: '$color$'
    // alternative syntax
    height: '$[pretty-cool]$'
  }
})
```

<div data-size="360" data-examples="yaml"></div>
```yaml
ctr:::setVariable:
  width: 200px
  color: red
  fontSize: 1em
  pretty-cool: 300px

.test:
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
