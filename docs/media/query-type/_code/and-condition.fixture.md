<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="and-condition"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  media: {
    query: {
      andCondition: {
        min-width: 200px
        min-height: 200px
        type: {
          media: 'screen'
          condition: 'not'
        }
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
@media not screen and (min-width: 200px) and (min-height: 200px) {
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
        type:
          media: screen
          condition: not
    background: red
```

