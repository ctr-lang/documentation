<!-- gen:false -->

<div data-size="340" class="code-cont" data-example="colon">
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


<div data-size="340" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  before: {
    option: {
      colon: ':'
    }
    content: 'beer'
  }
  after: {
    option: {
      colon: ':::::::::::::::::'
    }
    content: 'whiskey'
  }
})
```

<div data-size="340" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  before:
    option:
      colon: ':'
    content: beer
  after:
    option:
      colon: ':::::::::::::::::'
    content: whiskey
```

```css
.test {
  width: 200px;
}
.test:before {
  content: "beer";
}
.test:::::::::::::::::after {
  content: "whiskey";
}
```
<div class="cf"></div>
