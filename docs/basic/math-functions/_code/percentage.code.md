<div data-size="100" class="code-cont" data-example="percentage">
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
  border-radius: percentage(4 / 100)
})
```

<div data-size="100" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  border-radius: percentage(4 / 100)
```

```css
.test {
  width: 200px;
  border-radius: 4%;
}
```
<div class="cf"></div>
