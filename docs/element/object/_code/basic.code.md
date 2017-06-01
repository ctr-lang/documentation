<div data-size="510" class="code-cont" data-example="basic">
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


<div data-size="510" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  elements: {
    before: {
      content: 'Yusuke Urameshi'
      font-size: 1em
    }
    after: {
      content: 'Hiei'
      font-size: 2em
    }
    last-of-type: {
      font-size: 3em
    }
    yuyuHakusho: {
      option: {
        // will be key
        key: "nth-of-type(2)"
      }
      font-size: 4em
    }
  }
})
```

<div data-size="510" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  elements:
    before:
      content: [Yusuke, Urameshi]
      font-size: 1em
    after:
      content: Hiei
      font-size: 2em
    last-of-type:
      font-size: 3em
    yuyuHakusho:
      option:
        # will be key
        key: "nth-of-type(2)"
      font-size: 4em
```

```css
.test {
  width: 200px;
}
.test::before {
  font-size: 1em;
  content: "Yusuke Urameshi";
}
.test::after {
  font-size: 2em;
  content: "Hiei";
}
.test:last-of-type {
  font-size: 3em;
}
.test:nth-of-type(2) {
  font-size: 4em;
}
```
<div class="cf"></div>
