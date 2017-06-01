<div data-size="910" data-example="processby-order" class="code-cont">
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


<div data-size="910" data-examples="stylus"></div>
```styl
// processBy: order
// The numbers represent the order,
// in which the style is complied
ctr('.test', {
  option: {
    global: {
      processBy: 'order'
    }
  }
  // 1
  width: 111px
  // 2
  comp-div: {
    width: 222px
    // 3
    comp-p: {
      width: 333px
      // 4
      media--lg: {
        width: 444px
      }
    }
  }
  medias: {
    // 5
    '-sm': {
      width: 11px
      // 6
      before: {
        content: 'cool'
      }
    }
    // 7
    '-md': {
      width: 22px
    }
  }
  // 8
  hover-on: {
    color: red
  }
})
```

<div data-size="910" data-examples="yaml"></div>
```yaml
# processBy: order
# The numbers represent the order,
# in which the style is complied
.test:
  option:
    global:
      processBy: order
  # 1
  width: 111px
  # 2
  comp-div:
    width: 222px
    # 3
    comp-p:
      width: 333px
      # 4
      media--lg:
        width: 444px
  medias:
    # 5
    -sm:
      width: 11px
      # 6
      before:
        content: cool
    # 7
    -md:
      width: 22px
  # 8
  hover-on:
    color: red
```

```css
.test {
  width: 111px;
}
.test > div {
  width: 222px;
}
.test > div > p {
  width: 333px;
}
@media (max-width: 1050px) {
  .test > div > p {
    width: 444px;
  }
}
@media (max-width: 600px) {
  .test {
    width: 11px;
  }
}
@media (max-width: 600px) {
  .test::before {
    content: "cool";
  }
}
@media (max-width: 800px) {
  .test {
    width: 22px;
  }
}
.test:hover {
  color: #f00;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: color;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>
