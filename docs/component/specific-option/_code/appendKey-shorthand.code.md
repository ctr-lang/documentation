<div data-size="150" class="code-cont" data-example="appendKey-shorthand">
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
  'component--.appendMe': {
    font-size: 1em
  }
})
```

<div data-size="150" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  component--.appendMe:
    font-size: 1em
```

```css
.test {
  width: 200px;
}
.test.appendMe {
  font-size: 1em;
}
```
<div class="cf"></div>
