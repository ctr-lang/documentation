<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="multiple"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  media: {
    query: {
      type: {
        media: 'screen' 'print'
        condition: 'only'
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
@media only screen, print {
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
      type:
        media: [screen, print]
        condition: only
    background: red
```

