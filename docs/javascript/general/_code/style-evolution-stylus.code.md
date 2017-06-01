<div data-size="310" class="code-cont"  data-example="style-evolution-stylus">
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


<div data-size="310"></div>
```styl
ctr('.test', {
  size: 200px
  hover-on: {
    color: red
    background-color: green
  }
})
```

```css
.test {
  width: 200px;
  height: 200px;
}
.test:hover {
  color: #f00;
  transition-delay: 0s, 0s;
  background-color: #008000;
  transition-duration: 0.5s, 0.5s;
  transition-property: color, background-color;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
