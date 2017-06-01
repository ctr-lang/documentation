<!-- yaml-comment:false -->

<div data-size="100" class="code-cont" data-example="transparentify">
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
  color: transparentify(#91974C, #F34949, 0.5)
})
```

<div data-size="100" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  color: 'transparentify(#91974C, #F34949, 0.5)'
```

```css
.test {
  width: 200px;
  color: rgba(47,229,79,0.5);
}
```
<div class="cf"></div>
