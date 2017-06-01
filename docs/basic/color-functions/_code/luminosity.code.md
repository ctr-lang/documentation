<div data-size="100" class="code-cont" data-example="luminosity">
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


<div data-size="100" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  color: alpha(red, luminosity(red))
})
```

<div data-size="100" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  color: alpha(red, luminosity(red))
```

```css
.test {
  width: 200px;
  color: rgba(255,0,0,0.213);
}
```
<div class="cf"></div>
