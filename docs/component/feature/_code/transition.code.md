<div data-size="250" class="code-cont" data-example="transition">
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


<div data-size="250" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  component: {
    key: 'section'
    font-size: 1em
    // transition
    transition: {
      background: black
    }
  }
})
```

<div data-size="250" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  component:
    key: section
    font-size: 1em
    # transition
    transition:
      background: black
```

```css
.test {
  width: 200px;
}
.test > section {
  font-size: 1em;
  background: #000;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
