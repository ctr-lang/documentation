<div data-size="210" class="code-cont" data-example="string">
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
  $$: {
    content: 'hacker news'
  }
  width: 200px
  before: {
    content: '$content$'
  }
})
```

<div data-size="210" data-examples="yaml"></div>
```yaml
.test:
  $$:
    content: [hacker, news]
  width: 200px
  before:
    content: $content$
```

```css
.test {
  width: 200px;
}
.test::before {
  content: "hacker news";
}
```
<div class="cf"></div>
