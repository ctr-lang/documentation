<div data-size="190" class="code-cont" data-example="selector-false">
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
  width: 200px
  component: {
    key: 'span'
    selector: false
    font-size: 3em
  }
})
```

<div data-size="190" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  component:
    key: span
    selector: false
    font-size: 3em
```

```css
.test {
  width: 200px;
}
.test span {
  font-size: 3em;
}
```
<div class="cf"></div>
