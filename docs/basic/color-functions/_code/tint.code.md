<div data-size="100" class="code-cont" data-example="tint">
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
  color: tint(#fd0cc7, 66%)
})
```

<div data-size="100" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  color: 'tint(#fd0cc7, 66%)'
```

```css
.test {
  width: 200px;
  color: #feaceb;
}
```
<div class="cf"></div>
