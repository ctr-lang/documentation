<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="or-condition"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  media: {
    query: {
      orCondition: {
        min-width: 200px
        min-height: 200px
        type: {
          media: 'screen'
          condition: 'only'
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
@media only screen, (min-width: 200px), (min-height: 200px) {
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
      orCondition:
        min-width: 200px
        min-height: 200px
        type:
          media: screen
          condition: only
    background: red
```

