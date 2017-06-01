<!-- gen:false -->

<div data-size="275" data-example="iteration" class="code-cont">
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


<div data-size="275" data-examples="stylus"></div>
```styl
$font-size-1 = 1em
$font-size-2 = 2em
$font-size-3 = 3em

for i in 1..3
  ctr('.test' + i, {
    width: 200px
    font-size: lookup('$font-size-' + i)
  })
```


<div data-size="275" data-examples="yaml"></div>
```no-example

```


```css
.test1 {
  width: 200px;
  font-size: 1em;
}
.test2 {
  width: 200px;
  font-size: 2em;
}
.test3 {
  width: 200px;
  font-size: 3em;
}
```
<div class="cf"></div>
