<div data-size="230"></div>
```js
// NOTE: Processed through the YAML parser, white space sensitive
// (String, Template Literal) -> (<selector>, <data>)
ctr.create('.test-1', `
  width: 200px
`);

const ctrResult = ctr.getResult();
// .test-1 {
//   width: 200px;
// }

```

```js
// NOTE: Processed through the YAML parser, white space sensitive
// (String, String) -> (<selector>, <data>)
ctr.create('.test-1', 'width: 200px');

const ctrResult = ctr.getResult();
// .test-1 {
//   width: 200px;
// }

```
<div class="cf"></div>

