<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="a-confidence-progression"></div>

<!-- stylus -->
```fixture
ctr('.blue-button-hover', {
  color: white
  height: 50px
  font-size: 20px
  cursor: pointer
  padding: 0 50px
  background: #3498db
  line-height: 50px
  text-align: center
  display: inline-block
  hover: {
    background: #9b59b6
  }
})
```

<!-- css -->
```fixture
.blue-button-hover {
  color: #fff;
  height: 50px;
  cursor: pointer;
  font-size: 20px;
  padding: 0 50px;
  line-height: 50px;
  text-align: center;
  background: #3498db;
  display: inline-block;
}
.blue-button-hover:hover {
  background: #9b59b6;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.blue-button-hover:not(:hover) {
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: background;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```

<!-- yaml -->
```fixture
.blue-button-hover:
  color: white
  height: 50px
  font-size: 20px
  cursor: pointer
  padding: [0, 50px]
  background: '#3498db'
  line-height: 50px
  text-align: center
  display: inline-block
  hover:
    background: '#9b59b6'
```

