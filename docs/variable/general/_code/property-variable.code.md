<div data-size="175" class="code-cont" data-example="property-variable">
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


<div data-size="175" data-examples="stylus"></div>
```styl
ctr('.test', {
  $$: {
    myProp: 'color'
  }
  width: 200px
  $myProp$: red
})
```

<div data-size="175" data-examples="yaml"></div>
```yaml
.test:
  $$:
    myProp: color
  width: 200px
  $myProp$: red
```

```css
.test {
  color: #f00;
  width: 200px;
}
```
<div class="cf"></div>
