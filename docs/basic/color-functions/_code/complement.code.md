<div data-size="100" class="code-cont" data-example="complement">
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
  color: complement(#fd0cc7)
})
```

<div data-size="100" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  color: 'complement(#fd0cc7)'
```

```css
.test {
  width: 200px;
  color: #0cfd42;
}
```
<div class="cf"></div>
