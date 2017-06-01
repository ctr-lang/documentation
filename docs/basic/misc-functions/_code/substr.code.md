<div data-size="100" class="code-cont" data-example="substr">
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
  background: substr(substr(dredd, 1), 0, 3)
})
```

<div data-size="100" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  background: substr(substr(dredd, 1), 0, 3)
```

```css
.test {
  width: 200px;
  background: #f00;
}
```
<div class="cf"></div>
