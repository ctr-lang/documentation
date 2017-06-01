<!-- yaml-comment:false -->

<div data-size="100" class="code-cont" data-example="mix">
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
  color: mix(#000, #fff, 30%)
})
```

<div data-size="100" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  color: 'mix(#000, #fff, 30%)'
```

```css
.test {
  width: 200px;
  color: #b2b2b2;
}
```
<div class="cf"></div>
