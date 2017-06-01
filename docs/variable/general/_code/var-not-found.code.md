<div data-size="190" class="code-cont" data-example="var-not-found">
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


<div data-size="190" data-examples="stylus"></div>
```styl
ctr('.test', {
  $$: {
    height: 200px
  }
  width: 200px
  // wrong var name
  height: '$not-height$'
})
```

<div data-size="190" data-examples="yaml"></div>
```yaml
.test:
  $$:
    height: 200px
  width: 200px
  # wrong var name
  height: $not-height$
```

```css
.test {
  width: 200px;
  height: "$var-not-found$";
}
```
<div class="cf"></div>
