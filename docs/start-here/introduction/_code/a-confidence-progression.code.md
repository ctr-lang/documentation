<div data-size="525" class="code-cont" data-target=".blue-button-hover" data-example="a-confidence-progression">
    <div class="code">
        <div class="code-wrap">
            <textarea id="stylus"></textarea>
            <textarea id="css"></textarea>
            <div class="edit-code">
                <span>Edit</span>
            </div>
        </div>
    </div>
</div>


<div data-size="525" data-examples="stylus"></div>
```styl
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

<div data-size="525" data-examples="yaml"></div>
```yaml
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

```css
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
<div class="cf"></div>
