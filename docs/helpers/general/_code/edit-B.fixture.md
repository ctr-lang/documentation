<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="edit-B"></div>

<!-- stylus -->
```fixture
// Specifiy custom edit color
ctr('.test', {
  width: 200px
  edit: alpha(teal, 0.1)
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
}
.test * {
  background: rgba(0,128,128,0.1);
}
```

<!-- yaml -->
```fixture
# Specifiy custom edit color
.test:
  width: 200px
  edit: alpha(teal, 0.1)
```

