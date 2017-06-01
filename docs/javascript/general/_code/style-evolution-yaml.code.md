<div data-size="310"></div>
```yaml
# YAML its a beautiful thing
.test:
  size: 200px
  hover:
    on:
      color: red
      background-color: green
```

```css
/* YAML results */

.test {
  width: 200px;
  height: 200px;
}
.test:hover {
  color: #f00;
  background-color: #008000;
  transition-delay: 0s, 0s;
  transition-duration: 0.5s, 0.5s;
  transition-property: color, background-color;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1), cubic-bezier(0.42, 0, 0.58, 1);
}
```
<div class="cf"></div>


