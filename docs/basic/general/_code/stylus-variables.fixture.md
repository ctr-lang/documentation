<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="stylus-variables" class="code-cont"></div>

<!-- stylus -->
```fixture
$font-size = 14px

ctr('.test', {
  width: 200px
  font-size: $font-size
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  font-size: 14px;
}
```

<!-- yaml -->
```fixture
# Technically, not a "Stylus" variable,
# but YAML also has a pseudo global variable scope
$$:
  font-size: 14px

.test:
  width: 200px
  font-size: $font-size$
```

