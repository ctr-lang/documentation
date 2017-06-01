<div data-size="150" data-example="built-in-functions" class="code-cont">
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


<div data-size="150" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  top: unit(sin(3*PI/4), 'em')
  color: alpha(cornflowerblue, 0.5)
  background: transparentify(green, red, 0.5)
})
```

<div data-size="150" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  top: unit(sin(3*PI/4), em)
  color: alpha(cornflowerblue, 0.5)
  background: transparentify(green, red, 0.5)
```

```css
.test {
  width: 200px;
  top: 0.707106781em;
  color: rgba(100,149,237,0.5);
  background: rgba(0,255,0,0.5);
}
```
<div class="cf"></div>
