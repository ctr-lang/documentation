<div data-size="300" class="code-cont" data-example="arith">
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
  $$: {
    base: 10
    multiplier: 2
    type: 'px'
    eval: {
      // 10 * 2 = 20
      font-size: 'arith($base$ * $multiplier$)$type$'
    }
  }
  width: 200px
  font-size: '$[eval.font-size]$'
})
```

<div data-size="300" data-examples="yaml"></div>
```yaml
.test:
  $$:
    base: 10
    multiplier: 2
    type: px
    eval:
      # 10 * 2 = 20
      font-size: arith($base$ * $multiplier$)$type$
  width: 200px
  font-size: $[eval.font-size]$
```

```css
.test {
  width: 200px;
  font-size: 20px;
}
```

<div class="cf"></div>
