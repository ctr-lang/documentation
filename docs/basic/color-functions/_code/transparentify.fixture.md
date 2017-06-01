<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="transparentify"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  color: transparentify(#91974C, #F34949, 0.5)
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  color: rgba(47,229,79,0.5);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  color: 'transparentify(#91974C, #F34949, 0.5)'
```

