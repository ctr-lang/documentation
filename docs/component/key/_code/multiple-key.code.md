<div data-size="210" class="code-cont" data-example="multiple-key">
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


<div data-size="210" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  component: {
    key: '#beerMe' '.please'
    font-size: 1em
  }
})
```

<div data-size="210" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  component:
    key: ['#beerMe', .please]
    font-size: 1em
```

```css
.test {
  width: 200px;
}
.test > #beerMe {
  font-size: 1em;
}
.test > .please {
  font-size: 1em;
}
```
<div class="cf"></div>
