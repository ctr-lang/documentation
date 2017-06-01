<!-- gen:false -->

<div data-size="120" data-example="multiple-values-B" class="code-cont">
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


<div data-size="120" data-examples="stylus"></div>
```styl
// String wrapped properties
ctr('.test', {
  box-shadow: '0px 3px 8px 1px rgba(0,0,0,0.75)'
  text-shadow: '2px 1px 2px rgba(150, 150, 150, 0.9)'
})
```

<div data-size="120" data-examples="yaml"></div>
```yaml
# String wrapped properties
.test:
  box-shadow: '0px 3px 8px 1px rgba(0,0,0,0.75)'
  text-shadow: '2px 1px 2px rgba(150, 150, 150, 0.9)'
```

```css
.test {
  box-shadow: 0px 3px 8px 1px rgba(0,0,0,0.75);
  text-shadow: 2px 1px 2px rgba(150,150,150,0.9);
}
```
<div class="cf"></div>
