<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="built-in-functions" class="code-cont"></div>

<!-- stylus -->
```fixture
ctr('.test', {
  width: 200px
  top: unit(sin(3*PI/4), 'em')
  color: alpha(cornflowerblue, 0.5)
  background: transparentify(green, red, 0.5)
})
```

<!-- css -->
```fixture
.test {
  width: 200px;
  top: 0.707106781em;
  color: rgba(100,149,237,0.5);
  background: rgba(0,255,0,0.5);
}
```

<!-- yaml -->
```fixture
.test:
  width: 200px
  top: unit(sin(3*PI/4), em)
  color: alpha(cornflowerblue, 0.5)
  background: transparentify(green, red, 0.5)
```

