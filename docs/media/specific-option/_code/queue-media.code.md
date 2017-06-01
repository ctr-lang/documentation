<div data-size="350" class="code-cont" data-example="queue-media">
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


<div data-size="350" data-examples="stylus"></div>
```styl
ctr('.test', {
  option: {
    global: {
      queueMedia: false
    }
  }
  width: 200px
  // now processed in the order, it's received
  media--md: {
    background: blue
  }
  comp-div: {
    width: 400px
  }
})
```

<div data-size="350" data-examples="yaml"></div>
```yaml
.test:
  option:
    global:
      queueMedia: false
  width: 200px
  # now processed in the order, its received
  media--md:
    background: blue
  comp-div:
    width: 400px
```

```css
.test {
  width: 200px;
}
@media (max-width: 800px) {
  .test {
    background: #00f;
  }
}
.test > div {
  width: 400px;
}

```
<div class="cf"></div>
