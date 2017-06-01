<div data-size="350" data-example="sort-order" class="code-cont">
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


<div data-size="350" data-examples="stylus"></div>
```styl
ctr('.test', {
  option: {
    global: {
      // Preserve sort order
      sort: false
    }
  }
  font-size: 1em
  color: red
  border-radius: 10px
  background-position-x: center
  background-repeat-x: no-repeat
  overflow: hidden
  width: 100vw
})
```

<div data-size="350" data-examples="yaml"></div>
```yaml
.test:
  option:
    global:
      # Preserve sort order
      sort: false
  font-size: 1em
  color: red
  border-radius: 10px
  background-position-x: center
  background-repeat-x: no-repeat
  overflow: hidden
  width: 100vw
```

```css
.test {
  font-size: 1em;
  color: #f00;
  border-radius: 10px;
  background-position-x: center;
  background-repeat-x: no-repeat;
  overflow: hidden;
  width: 100vw;
}
```
<div class="cf"></div>
