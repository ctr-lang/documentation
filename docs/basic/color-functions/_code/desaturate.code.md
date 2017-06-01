<div data-size="100" class="code-cont" data-example="desaturate">
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
  color: desaturate(#66cc99, 40%)
})
```

<div data-size="100" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  color: 'desaturate(#66cc99, 40%)'
```

```css
.test {
  width: 200px;
  color: #7ab899;
}
```
<div class="cf"></div>
