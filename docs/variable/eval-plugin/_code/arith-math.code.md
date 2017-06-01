<div data-size="300" class="code-cont" data-example="arith-math">
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
    eval: {
      // 10 * 3.14
      top: 'arith( $base$ * Math.PI )'
      // 10 * 0.9
      left: 'arith( $base$ * Math.sin(3) )'
    }
  }
  top: '$[eval.top]$'
  left: '$[eval.left]$'
})
```

<div data-size="300" data-examples="yaml"></div>
```yaml
.test:
  $$:
    base: 10
    eval:
      # 10 * 3.14
      top: arith( $base$ * Math.PI )
      # 10 * 0.9
      left: arith( $base$ * Math.sin(3) )
  top: $[eval.top]$
  left: $[eval.left]$
```

```css
.test {
  left: 1.4112;
  top: 31.4159;
}
```

<div class="cf"></div>
