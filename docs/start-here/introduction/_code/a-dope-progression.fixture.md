<!-- Do Not Edit Directly -> Generated From *.code.md -->

<div class="codemirror-fixture" data-example="a-dope-progression"></div>

<!-- stylus -->
```fixture
ctr('.blue-dope-hover', {
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
    transform: {
      rotate: 360deg
      scale: 2
    }
    animation: {
      name: 'dope'
      count: infinite
      delay: 0.5s
      timeline: {
        '50': {
          color: #27ae60
        }
      }
    }
  }
})
```

<!-- css -->
```fixture
.blue-dope-hover {
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
.blue-dope-hover:hover {
  background: #9b59b6;
  animation-name: dope;
  animation-delay: 0.5s;
  animation-duration: 0.5s;
  transition-delay: 0s, 0s;
  animation-fill-mode: none;
  animation-direction: normal;
  animation-play-state: running;
  transition-duration: 0.5s, 0.5s;
  animation-iteration-count: infinite;
  transform: rotate(360deg) scale(2);
  transition-property: background, transform;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
.blue-dope-hover:not(:hover) {
  transition-delay: 0s, 0s;
  transition-duration: 0.5s, 0.5s;
  transition-property: background, transform;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
@keyframes dope {
  50% {
    color: #27ae60;
  }
}
```

<!-- yaml -->
```fixture
.blue-dope-hover:
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
    transform:
      rotate: 360deg
      scale: 2
    animation:
      name: dope
      count: infinite
      delay: 0.5s
      timeline:
        50:
          color: '#27ae60'
```

