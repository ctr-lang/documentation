<!-- gen:false -->

<div data-size="400" class="code-cont" data-example="ctrsetoption">
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


<div data-size="400" data-examples="stylus"></div>
```styl
ctrSetOption({
  hover: {
    duration: 2s
    delay: 0.5s
    ease: 'ease-in'
  }
})

ctr('.test', {
  hover: {
    on: {
      width: 400px
    }
    non: {
      width: 200px
    }
  }
})
```

<div data-size="400" data-examples="yaml"></div>
```yaml
ctr:::setOption:
  hover:
    duration: 2s
    delay: 0.5s
    ease: ease-in

.test:
  hover:
    on:
      width: 400px
    non:
      width: 200px
```

```css
.test:hover {
  width: 400px;
  transition-delay: 0.5s;
  transition-duration: 2s;
  transition-property: width;
  transition-timing-function: ease-in;
}
.test:not(:hover) {
  width: 200px;
  transition-delay: 0.5s;
  transition-duration: 2s;
  transition-property: width;
  transition-timing-function: ease-in;
}
```
<div class="cf"></div>
