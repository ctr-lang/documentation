<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="and-with-or-condition"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  media: {
    query: {
      andCondition: {
        min-width: 200px
        min-height: 200px
      }
      orCondition: {
        max-width: 800px
        max-height: 800px
      }
      type: {
        media: 'screen'
        condition: 'not'
      }
    }
    background: red
  }
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
@media not screen and (min-width: 200px) and (min-height: 200px) and (max-width: 800px), (max-height: 800px) {
  .test {
    background: #f00;
  }
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  media:
    query:
      andCondition:
        min-width: 200px
        min-height: 200px
      orCondition:
        max-width: 800px
        max-height: 800px
      type:
        media: screen
        condition: not
    background: red
```

