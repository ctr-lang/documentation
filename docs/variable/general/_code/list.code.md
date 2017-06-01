<div data-size="280" class="code-cont" data-example="list">
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


<div data-size="280" data-examples="stylus"></div>
```styl
ctr('.test', {
  $$: {
    keyList: '.easy' '#as' '.oneTwoThree'
  }
  width: 200px
  component: {
    key: '$keyList$'
    font-size: 1em
  }
})
```

<div data-size="280" data-examples="yaml"></div>
```yaml
.test:
  $$:
    keyList: [.easy, '#as', .oneTwoThree]
  width: 200px
  component:
    key: $keyList$
    font-size: 1em
```

```css
.test {
  width: 200px;
}
.test > .easy {
  font-size: 1em;
}
.test > #as {
  font-size: 1em;
}
.test > .oneTwoThree {
  font-size: 1em;
}
```
<div class="cf"></div>
