<div data-size="225" class="code-cont" data-example="internal">
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

<div data-size="225" data-examples="stylus"></div>
```styl
ctr('.test', {
  $$: {
    myObject: {
      height: 200px
      background: red
    }
  }
  width: 200px
  merge: '$myObject$'
})
```

<div data-size="225" data-examples="yaml"></div>
```yaml
.test:
  $$:
    myObject:
      height: 200px
      background: red
  width: 200px
  merge: $myObject$
```

```css
.test {
  width: 200px;
  height: 200px;
  background: #f00;
}
```
<div class="cf"></div>
