<div data-size="460" class="code-cont" data-example="state-A">
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


<div data-size="460" data-examples="stylus"></div>
```styl
ctr('.test', {
  width: 200px
  before: {
    content: 'test'
    // state
    hover: {
      on: {
        opacity: 1
      }
      non: {
        opacity: 0.5
      }
    }
  }
})
```

<div data-size="460" data-examples="yaml"></div>
```yaml
.test:
  width: 200px
  before:
    content: test
    # state
    hover:
      on:
        opacity: 1
      non:
        opacity: 0.5
```

```css
.test {
  width: 200px;
}
.test::before {
  content: "test";
}
.test:hover::before {
  opacity: 1;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.test:not(:hover)::before {
  opacity: 0.5;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
