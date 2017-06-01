<!-- gen:false -->
<!-- test:false -->
<!-- fix:false -->

<div data-size="225" class="code-cont" data-example="external">
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

<div data-size="225" data-examples="stylus"></div>
```js
const component = {
  key: 'span',
  color 'red',
  'font-size': '1em',
};

ctr.create('.test', {
  width: '200px',
  merge: component
});
```

<div data-size="225" data-examples="yaml"></div>
```js
const component = {
  key: 'span',
  color 'red',
  'font-size': '1em',
};

ctr.create('.test', {
  width: '200px',
  merge: component
});
```

```css
.test {
  width: 200px;
}
.test > span {
  color: #f00;
  font-size: 1em;
}
```
<div class="cf"></div>
