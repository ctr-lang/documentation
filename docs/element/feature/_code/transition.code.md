<div data-size="260" class="code-cont" data-example="transition">
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


<div data-size="260" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  first-child: {
    height: 400px
    // transition
    transition: {
      background: black
    }
  }
})
```

<div data-size="260" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  first-child:
    height: 400px
    # transition
    transition:
      background: black
```

```css
.test {
  width: 200px;
}
.test:first-child {
  height: 400px;
  background: #000;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
